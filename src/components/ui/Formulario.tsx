"use client"

import { philosopher } from "@/libs/fonts"
import { Controller, useForm } from "react-hook-form"
import { Checkbox } from "./checkbox"
import { Field, FieldGroup, FieldLabel } from "./field"
import { useState } from "react"
import clsx from "clsx"

interface SuscribeData {
    email: string
}

const Formulario = () => {
    const [desactivar, setDesactivar] = useState<boolean>(true)
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMsg, setErrorMsg] = useState('')

    const { control, handleSubmit, formState: { errors }, reset } = useForm<SuscribeData>({
        defaultValues: {
            email: ""
        }
    })

    const onSubmit = handleSubmit(async (data: SuscribeData) => {
        setStatus('loading')
        setErrorMsg('')

        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: data.email }),
            })

            const result = await res.json()

            if (!res.ok) {
                throw new Error(result.error?.message || 'Ocurrió un error')
            }

            setStatus('success')
            reset()
        } catch (err) {
            setStatus('error')
            setErrorMsg(err instanceof Error ? err.message : 'Error desconocido')
        }
    })

    return (
        <form onSubmit={onSubmit}>

            <FieldGroup className="mx-auto w-100 mb-1">
                <Field orientation="horizontal">
                    <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" onCheckedChange={() => setDesactivar(!desactivar)} />
                    <FieldLabel htmlFor="terms-checkbox-basic">
                        Acepto la <a className="text-red-400 font-semibold hover:text-red-600" href="#">Politica de Privacidad</a>
                    </FieldLabel>
                </Field>
            </FieldGroup>

            <div className="flex">
                <div>
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: {
                                message: "Email es requerido",
                                value: true
                            },
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Ingresa un email válido"
                            }
                        }}
                        render={({ field }) => {
                            return (
                                <input
                                    type="text"
                                    placeholder="email@domain.com" {...field}
                                    className="border-l-3 border-t-3 border-b-3 rounded-l-lg pl-2 md:w-100 h-10.75"
                                    autoComplete="off"
                                />
                            )
                        }}
                    />
                    {
                        errors.email && <p className="text-xs font-bold text-red-600">
                            {errors.email.message}
                        </p>
                    }
                </div>
                <button
                    className={clsx(
                        `${philosopher.className} antialiased text-white font-semibold px-5 py-2 rounded-r-lg text-[18px] tracking-wider cursor-pointer`,
                        desactivar || status === 'loading' ? "bg-gray-600 hover:bg-gray-600" : "bg-red-600 hover:bg-red-800"
                    )}
                    disabled={desactivar || status === 'loading'}
                >
                    {status === 'loading' ? 'ENVIANDO...' : 'SUSCRIBE'}
                </button>
            </div>

            {status === 'success' && (
                <p className="text-sm font-semibold text-green-600 mt-2">¡Listo! Te suscribiste correctamente.</p>
            )}
            {status === 'error' && (
                <p className="text-sm font-semibold text-red-600 mt-2">{errorMsg}</p>
            )}

        </form>
    )
}
export default Formulario