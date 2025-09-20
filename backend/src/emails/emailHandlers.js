import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  try {
    const data = await resendClient.emails.send({
      from: `${sender.name} <${sender.email}>`,
      to: [email], // make sure it's an array
      subject: "Welcome to chatify!",
      html: createWelcomeEmailTemplate(name, clientURL),
    });

    console.log("✅ Welcome Email sent successfully", data);
    return data;
  } catch (error) {
    console.error("❌ Failed to send welcome email:", error.message);
    throw error;
  }
};
