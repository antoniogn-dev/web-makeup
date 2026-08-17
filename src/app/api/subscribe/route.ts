// app/api/subscribe/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    console.log('Token presente:', !!process.env.MAILERLITE_API_TOKEN);
    console.log('Primeros caracteres:', process.env.MAILERLITE_API_TOKEN?.slice(0, 10));
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { error: 'El email es obligatorio' },
                { status: 400 }
            );
        }

        const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.MAILERLITE_API_TOKEN}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email,
                groups: [process.env.MAILERLITE_GROUP_ID],
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json({ error: data }, { status: response.status });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error al conectar con MailerLite:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}