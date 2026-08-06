import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const message = `🔥 NEW UNSEEN ORDER

Order ID: ${data.orderId}

👤 Customer:
${data.name}

📞 Phone:
${data.phone}

📍 Address:
${data.address}

━━━━━━━━━━━━━━

🛒 Items:

${data.items
  .map(
    (item: any) =>
      `• ${item.name}
Size: ${item.size}
Qty: ${item.quantity}
Price: ${item.price}`
  )
  .join("\n\n")}

━━━━━━━━━━━━━━

🚚 Shipping: ${data.shippingFee} EGP

💰 Total: ${data.total} EGP

Payment:
${data.payment}`;

    const response = await fetch(
      `https://api.ultramsg.com/${process.env.ULTRAMSG_INSTANCE_ID}/messages/chat`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          token: process.env.ULTRAMSG_TOKEN!,
          to: process.env.ULTRAMSG_PHONE!,
          body: message,
        }),
      }
    );

    const result = await response.json();

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send WhatsApp" },
      { status: 500 }
    );
  }
}