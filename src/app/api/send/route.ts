import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface PostRequestBody {
    email: string;
    message: string;
}


export async function POST(req: Request): Promise<Response> {
    try {

        // return Response.json({success:true,msg:"req sucessfully"})
        const { email, message }: PostRequestBody = await req.json();
        console.log("backend: email and message:-", email, message);

        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: 'kunalrisaanva12@gmail.com', // Your receiving email
            subject: 'Music Client Queryies',
            replyTo: email,
            html: ` <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${message}</p>`,
        });

        return Response.json({ success: true, data });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}


