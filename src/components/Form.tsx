"use client";

import { useId, useState, type ReactNode } from "react";
import { WhatsAppIcon } from "./icons";
import { waLink } from "@/data/site";
import { useI18n } from "@/i18n/provider";

const fieldBase =
  "w-full min-h-[44px] rounded-lg border bg-white px-4 py-2.5 text-base text-charcoal-900 " +
  "placeholder:text-charcoal-900/40 transition-colors focus:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-teal-600/40";

export function Field({
  label,
  error,
  children,
  hint,
}: {
  label: string;
  error?: string;
  hint?: string;
  children: (props: { id: string; describedBy?: string; invalid: boolean }) => ReactNode;
}) {
  const id = useId();
  const errId = `${id}-err`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-charcoal-900">
        {label}
      </label>
      {children({ id, describedBy: error ? errId : undefined, invalid: !!error })}
      {hint && !error && <p className="text-xs text-charcoal-900/55">{hint}</p>}
      <p id={errId} aria-live="polite" className="min-h-[1rem] text-xs text-error-600">
        {error}
      </p>
    </div>
  );
}

type ContactFormState = { name: string; phone: string; message: string };
type Errors = Partial<Record<keyof ContactFormState, string>>;

export function ContactForm() {
  const { t } = useI18n();
  const [values, setValues] = useState<ContactFormState>({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  function update<K extends keyof ContactFormState>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Errors = {};
    if (!values.name.trim()) next.name = t("form.errName");
    if (!values.phone.trim()) next.phone = t("form.errPhone");
    else if (!/[+\d][\d\s()-]{6,}/.test(values.phone))
      next.phone = t("form.errPhoneBad");
    if (!values.message.trim()) next.message = t("form.errMessage");
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const text =
      `Здравствуйте! Меня зовут ${values.name.trim()}. ` +
      `Телефон: ${values.phone.trim()}. ${values.message.trim()}`;
    // No backend assumed — the form composes a pre-filled WhatsApp chat.
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3">
      <Field label={t("form.name")} error={errors.name}>
        {({ id, describedBy, invalid }) => (
          <input
            id={id}
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={invalid}
            aria-describedby={describedBy}
            className={`${fieldBase} ${
              invalid ? "border-error-600" : "border-charcoal-900/15 focus-visible:border-teal-600"
            }`}
            placeholder={t("form.namePh")}
          />
        )}
      </Field>

      <Field label={t("form.phone")} error={errors.phone}>
        {({ id, describedBy, invalid }) => (
          <input
            id={id}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={invalid}
            aria-describedby={describedBy}
            className={`${fieldBase} ${
              invalid ? "border-error-600" : "border-charcoal-900/15 focus-visible:border-teal-600"
            }`}
            placeholder="+7 ___ ___ __ __"
          />
        )}
      </Field>

      <Field label={t("form.message")} error={errors.message}>
        {({ id, describedBy, invalid }) => (
          <textarea
            id={id}
            rows={4}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={invalid}
            aria-describedby={describedBy}
            className={`${fieldBase} resize-y ${
              invalid ? "border-error-600" : "border-charcoal-900/15 focus-visible:border-teal-600"
            }`}
            placeholder={t("form.messagePh")}
          />
        )}
      </Field>

      <button
        type="submit"
        className="mt-1 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-95 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
      >
        <WhatsAppIcon className="h-[18px] w-[18px]" />
        {t("form.submit")}
      </button>
      <p className="text-xs text-charcoal-900/55">{t("form.note")}</p>
    </form>
  );
}
