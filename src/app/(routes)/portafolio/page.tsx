"use client"

import { useEffect, useState } from "react"
import galeriaImagenes from "@/data/imagenesData"


const galeria_filtros = ['todos', 'arquitectura', 'urbano', 'abstracto']


function navBtnStyle(side: 'left' | 'right'): React.CSSProperties {
    return {
        position: 'absolute',
        [side]: '1.5rem',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        color: 'var(--color-text)',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '1.1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        transition: 'border-color 0.2s',
    }
}

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--color-accent)',
            letterSpacing: '0.1em',
            marginBottom: '1.2rem',
        }}>
            {children}
        </div>
    )
}


const PortafolioPage = () => {

    const [activeFilter, setActiveFilter] = useState('todos')
    const [lightbox, setLightbox] = useState<(typeof galeriaImagenes)[0] | null>(null)
    const [loaded, setLoaded] = useState<Set<number>>(new Set())

    const filtered = activeFilter === 'todos'
        ? galeriaImagenes
        : galeriaImagenes.filter(img => img.category === activeFilter)

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setLightbox(null)
            if (lightbox && e.key === 'ArrowRight') {
                const idx = filtered.findIndex(i => i.id === lightbox.id)
                if (idx < filtered.length - 1) setLightbox(filtered[idx + 1])
            }
            if (lightbox && e.key === 'ArrowLeft') {
                const idx = filtered.findIndex(i => i.id === lightbox.id)
                if (idx > 0) setLightbox(filtered[idx - 1])
            }
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [lightbox, filtered])

    const markLoaded = (id: number) => setLoaded(s => new Set([...s, id]))


    return (
        <>
            <section id="galería" style={{ padding: '8rem 4rem', borderTop: '1px solid var(--color-border)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <SectionLabel>04 // galería</SectionLabel>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
                        <div>
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                                Exploración visual
                            </h2>
                            <p style={{ color: 'var(--color-text-dim)', fontSize: '0.95rem' }}>
                                Arquitectura, forma y luz — fotografía como práctica de observación.
                            </p>
                        </div>

                        {/* Filter pills */}
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {galeria_filtros.map(f => (
                                <button
                                    key={f}
                                    onClick={() => setActiveFilter(f)}
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.72rem',
                                        padding: '0.45rem 1rem',
                                        borderRadius: '999px',
                                        border: '1px solid',
                                        borderColor: activeFilter === f ? 'var(--color-accent)' : 'var(--color-border)',
                                        background: activeFilter === f ? 'var(--color-accent)' : 'transparent',
                                        color: activeFilter === f ? '#fff' : 'var(--color-text-dim)',
                                        cursor: 'pointer',
                                        letterSpacing: '0.06em',
                                        textTransform: 'uppercase',
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Masonry grid via CSS columns */}
                    <div
                        style={{
                            columns: '4 220px',
                            columnGap: '12px',
                        }}
                    >
                        {filtered.map((img, i) => (
                            <div
                                key={img.id}
                                onClick={() => setLightbox(img)}
                                style={{
                                    breakInside: 'avoid',
                                    marginBottom: '12px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: '6px',
                                    cursor: 'zoom-in',
                                    background: 'var(--color-surface)',
                                    opacity: loaded.has(img.id) ? 1 : 0,
                                    transition: `opacity 0.4s ease ${i * 0.04}s`,
                                }}
                            >
                                <img
                                    src={img.url}
                                    alt={img.alt}
                                    loading="lazy"
                                    onLoad={() => markLoaded(img.id)}
                                    style={{
                                        width: '100%',
                                        display: 'block',
                                        borderRadius: '6px',
                                        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)'
                                        const overlay = (e.currentTarget.parentElement as HTMLElement).querySelector('.overlay') as HTMLElement
                                        if (overlay) overlay.style.opacity = '1'
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.transform = 'scale(1)'
                                        const overlay = (e.currentTarget.parentElement as HTMLElement).querySelector('.overlay') as HTMLElement
                                        if (overlay) overlay.style.opacity = '0'
                                    }}
                                />
                                {/* Overlay */}
                                <div
                                    className="overlay"
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(8,8,14,0.85) 0%, transparent 50%)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        padding: '1rem',
                                        pointerEvents: 'none',
                                    }}
                                >
                                    <span style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.65rem',
                                        color: 'var(--color-accent)',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        marginBottom: '0.2rem',
                                    }}>
                                        {img.category}
                                    </span>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        color: 'rgba(255,255,255,0.7)',
                                        fontFamily: 'var(--font-mono)',
                                    }}>
                                        © {img.author}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image count */}
                    <div style={{
                        marginTop: '2.5rem',
                        textAlign: 'center',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--color-muted)',
                        letterSpacing: '0.06em',
                    }}>
                        {filtered.length} imagen{filtered.length !== 1 ? 'es' : ''} — {activeFilter}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightbox && (
                <div
                    onClick={() => setLightbox(null)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 100,
                        background: 'rgba(8,8,14,0.96)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem',
                        backdropFilter: 'blur(8px)',
                    }}
                >
                    {/* Prev */}
                    {filtered.findIndex(i => i.id === lightbox.id) > 0 && (
                        <button
                            onClick={e => {
                                e.stopPropagation()
                                const idx = filtered.findIndex(i => i.id === lightbox.id)
                                setLightbox(filtered[idx - 1])
                            }}
                            style={navBtnStyle('left')}
                        >
                            ←
                        </button>
                    )}

                    <div
                        onClick={e => e.stopPropagation()}
                        style={{
                            maxWidth: '900px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                        }}
                    >
                        <img
                            src={lightbox.url.replace('w=800', 'w=1200')}
                            alt={lightbox.alt}
                            style={{
                                width: '100%',
                                maxHeight: '78vh',
                                objectFit: 'contain',
                                borderRadius: '8px',
                                display: 'block',
                            }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <span style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.7rem',
                                    color: 'var(--color-accent)',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    marginRight: '1rem',
                                }}>
                                    {lightbox.category}
                                </span>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-dim)' }}>
                                    © {lightbox.author}
                                </span>
                            </div>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-muted)' }}>
                                {filtered.findIndex(i => i.id === lightbox.id) + 1} / {filtered.length}
                            </div>
                        </div>
                    </div>

                    {/* Next */}
                    {filtered.findIndex(i => i.id === lightbox.id) < filtered.length - 1 && (
                        <button
                            onClick={e => {
                                e.stopPropagation()
                                const idx = filtered.findIndex(i => i.id === lightbox.id)
                                setLightbox(filtered[idx + 1])
                            }}
                            style={navBtnStyle('right')}
                        >
                            →
                        </button>
                    )}

                    {/* Close */}
                    <button
                        onClick={() => setLightbox(null)}
                        style={{
                            position: 'absolute',
                            top: '1.5rem',
                            right: '1.5rem',
                            background: 'var(--color-surface)',
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-text)',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        ✕
                    </button>
                </div>
            )}
        </>
    )

}

export default PortafolioPage