



const ExperienciaSection = () => {
    const items = [
        {
            icon: '✦',
            title: 'Atención personalizada',
            desc: 'Cada novia es única. Comenzamos con una entrevista para entender tu visión, tu estilo y los detalles que te hacen especial.',
        },
        {
            icon: '✦',
            title: 'Productos de alta gama',
            desc: 'Trabajamos exclusivamente con marcas premium: bases de larga duración, pestañas MINK, productos de fijación profesional.',
        },
        {
            icon: '✦',
            title: 'Vamos a donde tú estés',
            desc: 'Llevamos nuestra silla y luz de maquillaje portable al lugar que elijas: tu casa, el hotel o la hacienda.',
        },
        {
            icon: '✦',
            title: 'Resultados que duran',
            desc: 'Técnicas y productos pensados para que tu look resista desde la ceremonia hasta la última canción de la fiesta.',
        },
    ]

    return (
        <section
            id="experiencia"
            style={{
                padding: '8rem 4rem',
                background: '#F3EDE6',
                borderTop: '1px solid var(--color-border)',
            }}
            className=""
        >
            <div className="max-w-275 mx-auto" >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 place-content-center">
                    <div>
                        <p className="text-titulos" style={{
                            fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 500,
                            letterSpacing: '0.2em', textTransform: 'uppercase',
                            marginBottom: '1rem',
                        }}>La experiencia</p>
                        <h2 style={{
                            fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                            fontWeight: 500, color: '#000000',
                            marginBottom: '1.5rem', lineHeight: 1.2,
                        }}>
                            Más que maquillaje —<br />
                            <em className="text-titulos" >un ritual de belleza</em>
                        </h2>
                        <p style={{
                            fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: '#9a8a7e',
                            lineHeight: 1.75, marginBottom: '2.5rem',
                        }}>
                            Cada detalle está pensado para que el día de tu boda empieces desde un lugar de calma, confianza y luminosidad. No es solo look — es cómo te sientes cuando entras a esa sala.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                            {items.map(item => (
                                <div key={item.title} style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                                    <span style={{
                                        fontFamily: 'var(--font-serif)', fontSize: '0.85rem',
                                        color: 'var(--color-gold)', marginTop: '0.1rem', flexShrink: 0,
                                    }}>{item.icon}</span>
                                    <div>
                                        <div style={{
                                            fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 600,
                                            color: 'var(--color-espresso)', marginBottom: '0.3rem',
                                        }}>{item.title}</div>
                                        <div style={{
                                            fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 300,
                                            color: '#9a8a7e', lineHeight: 1.65,
                                        }}>{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Photo */}
                    <div style={{
                        borderRadius: '16px', overflow: 'hidden',
                        aspectRatio: '4/5', background: 'var(--color-cream-3)',
                        boxShadow: '0 24px 60px rgba(26,22,20,0.12)',
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1536567307162-551e460b7fc2?w=700&h=875&fit=crop&auto=format"
                            alt="Novia radiante"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ExperienciaSection