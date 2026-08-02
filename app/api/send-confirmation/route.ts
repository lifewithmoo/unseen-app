import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(
  request: Request
) {

  try {

    const data = await request.json();


    console.log(
      "RESEND KEY:",
      process.env.RESEND_API_KEY
        ? "FOUND"
        : "MISSING"
    );


    const itemsHTML = data.items
      ?.map(
        (item: any) => `
        
        <div style="
          padding:15px 0;
          border-bottom:1px solid #ddd;
        ">

          <p style="
            margin:5px 0;
            font-size:16px;
          ">
            <strong>${item.name}</strong>
          </p>


          <p style="
            margin:5px 0;
            color:#555;
          ">
            Size: ${item.size || "N/A"}
          </p>


          <p style="
            margin:5px 0;
            color:#555;
          ">
            Quantity: ${item.quantity}
          </p>


          <p style="
            margin:5px 0;
            color:#555;
          ">
            Price: ${item.price}
          </p>


        </div>

        `
      )
      .join("");




    const emailResponse =
      await resend.emails.send({

        from:
          "UNSEEN <orders@unseenapparel.space>",


        to:
          data.email,


        subject:
          "Your UNSEEN Order Confirmation 🔥",



        html: `

        <div style="
          background:#f3f3f3;
          padding:50px 20px;
          font-family:Arial, Helvetica, sans-serif;
          color:#111;
        ">


          <div style="
            max-width:650px;
            margin:auto;
            background:#ffffff;
            padding:45px;
            border-radius:14px;
          ">


            <h1 style="
              text-align:center;
              font-size:38px;
              letter-spacing:10px;
              margin:0;
              color:#000;
            ">
              UNSEEN
            </h1>



            <p style="
              text-align:center;
              color:#555;
              font-size:14px;
              margin-top:15px;
            ">
              Not Made To Be Seen.
              Made To Be Remembered.
            </p>



            <hr style="
              border:none;
              border-top:1px solid #ddd;
              margin:35px 0;
            "/>




            <h2 style="
              font-size:26px;
            ">
              Order Confirmed 🔥
            </h2>



            <p style="
              font-size:16px;
              line-height:1.8;
              color:#333;
            ">
              Thank you for your order.
              Your UNSEEN pieces are being prepared
              with care and will be shipped soon.
            </p>





            <div style="
              background:#fafafa;
              padding:25px;
              border-radius:12px;
              border:1px solid #eee;
              margin-top:30px;
            ">


              <h3>
                Customer Information
              </h3>

<p>
  <strong>Order ID:</strong>
  ${data.orderId}
</p>

              <p>
                <strong>Name:</strong>
                ${data.name || ""}
              </p>


              <p>
                <strong>Email:</strong>
                ${data.email || ""}
              </p>


              <p>
                <strong>Phone Number:</strong>
                ${data.phone || ""}
              </p>


              <p>
                <strong>Shipping Address:</strong>
                ${data.address || ""}
              </p>


              <p>
                <strong>Total:</strong>
                ${data.total || ""}
              </p>


            </div>






            <div style="
              background:#fafafa;
              padding:25px;
              border-radius:12px;
              border:1px solid #eee;
              margin-top:30px;
            ">


              <h3>
                Order Items
              </h3>


              ${itemsHTML || ""}


            </div>







            <div style="
              margin-top:35px;
              background:#000;
              color:#fff;
              padding:30px;
              border-radius:12px;
              text-align:center;
            ">


              <p style="
                margin:0;
                font-size:16px;
                line-height:1.8;
              ">

                Thank you for being part of UNSEEN.
                <br/>
                Every piece is created with passion,
                detail, and a vision to make you stand out.

              </p>


            </div>






            <p style="
              margin-top:35px;
              text-align:center;
              color:#555;
              font-size:14px;
            ">

              We will keep you updated until your order arrives.
              <br/>
              Welcome to the UNSEEN community 🖤

            </p>






            <p style="
              margin-top:40px;
              text-align:center;
              color:#888;
              font-size:13px;
            ">

              © 2026 UNSEEN.
              <br/>
              All rights reserved.

            </p>



          </div>


        </div>

        `

      });



    return Response.json({

      success:true,
      emailResponse

    });



  } catch (error) {


    console.error(
      "EMAIL ERROR:",
      error
    );


    return Response.json(

      {
        success:false,
        error
      },

      {
        status:500
      }

    );


  }

}