import express from "express";
import { Resend } from "resend";

const app = express();
app.use(express.json());

async function sendWhatsAppMessage(message: string) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const recipient = process.env.WHATSAPP_RECIPIENT_PHONE_NUMBER;

  if (!token || !phoneId || !recipient) {
    console.warn("WhatsApp credentials missing, skipping WhatsApp notification.");
    return;
  }

  const url = `https://graph.facebook.com/v17.0/${phoneId}/messages`;

  const payload = {
    messaging_product: "whatsapp",
    to: recipient,
    type: "text",
    text: { body: message }
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("WhatsApp API error:", errorData);
    } else {
      console.log("WhatsApp message sent successfully.");
    }
  } catch (error) {
    console.error("Failed to send WhatsApp message:", error);
  }
}

async function sendTeamsMessage(message: string) {
  const webhookUrl = process.env.MS_TEAMS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("MS Teams Webhook URL missing, skipping Teams notification.");
    return;
  }

  const payload = {
    type: "message",
    attachments: [
      {
        contentType: "application/vnd.microsoft.card.adaptive",
        content: {
          type: "AdaptiveCard",
          body: [
            {
              type: "TextBlock",
              size: "Medium",
              weight: "Bolder",
              text: "New Meeting Scheduled"
            },
            {
              type: "TextBlock",
              text: message,
              wrap: true
            }
          ],
          $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
          version: "1.0"
        }
      }
    ]
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("MS Teams API error:", errorText);
    } else {
      console.log("MS Teams message sent successfully.");
    }
  } catch (error) {
    console.error("Failed to send MS Teams message:", error);
  }
}

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { type, data } = req.body;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is missing");
      return res.status(500).json({ error: "Email service not configured" });
    }

    const resend = new Resend(resendApiKey);

    let subject = "";
    let html = "";
    let whatsappMessage = "";

    if (type === "demo") {
      subject = `New Demo Request from ${data.firstName} ${data.lastName}`;
      html = `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company}</p>
      `;
      whatsappMessage = `*New Demo Request*\n\n*Name:* ${data.firstName} ${data.lastName}\n*Email:* ${data.email}\n*Company:* ${data.company}`;
    } else if (type === "contact") {
      subject = `New Contact Inquiry: ${data.inquiryType}`;
      html = `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Inquiry Type:</strong> ${data.inquiryType}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `;
      whatsappMessage = `*New Contact Inquiry: ${data.inquiryType}*\n\n*Name:* ${data.firstName} ${data.lastName}\n*Email:* ${data.email}\n*Phone:* ${data.phone || "Not provided"}\n*Message:*\n${data.message}`;
    } else {
      return res.status(400).json({ error: "Invalid request type" });
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "Mira3D <onboarding@resend.dev>",
      to: ["tanishq.rameshsolanki@gmail.com"],
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: error.message });
    }

    // Send WhatsApp notification in the background
    sendWhatsAppMessage(whatsappMessage);

    res.status(200).json({ success: true, data: emailData });
  } catch (error: any) {
    console.error("Server error:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

app.post("/api/teams", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }
    await sendTeamsMessage(message);
    res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Teams API error:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

export default app;
