import { useState } from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { useLanguage } from '../context/LanguageContext'
import ptContent from '../content/pt/contact'
import enContent from '../content/en/contact'
import styles from './ContactPage.module.css'

export default function ContactPage() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? enContent : ptContent

  const [formStatus, setFormStatus] = useState('idle')
  const [formMessage, setFormMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})

  const resetFormStatus = () => {
    setFormStatus('idle')
    setFormMessage('')
    setFieldErrors({})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get('nome') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const subject = String(formData.get('assunto') || '').trim()
    const message = String(formData.get('mensagem') || '').trim()

    const nextErrors = {}

    if (!name) {
      nextErrors.name = c.form.errors.name
    }

    if (!email) {
      nextErrors.email = c.form.errors.email.required
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = c.form.errors.email.invalid
    }

    if (!subject) {
      nextErrors.subject = c.form.errors.subject
    }

    if (!message) {
      nextErrors.message = c.form.errors.message
    }

    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors)
      setFormStatus('idle')
      setFormMessage('')
      return
    }

    setFieldErrors({})
    setFormStatus('sending')
    setFormMessage('')

    try {
      const response = await fetch('https://formspree.io/f/xgojklzw', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Não foi possível enviar a mensagem.')
      }

      form.reset()
      setFormStatus('success')
      setFormMessage(c.form.successMessage)
    } catch {
      setFormStatus('error')
      setFormMessage(c.form.errorMessage)
    }
  }

  return (
    <Layout>
      <Seo
        title={c.seo.title}
        description={c.seo.description}
        path={c.seo.path}
        lang={c.seo.lang}
        robots={c.seo.robots}
      />
      <section className={styles.page} aria-labelledby="contact-title">
        <div className={styles.container}>
          <div className={styles.intro}>
            <div className={styles.introText}>
              <h1 id="contact-title" className={styles.title}>
                {c.title}
              </h1>

              <p className={styles.description}>
                {c.description}
              </p>
            </div>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>{c.details.emailLabel}</span>
                <a
                  href="mailto:hello@henriquesilva.design"
                  className={styles.contactLink}
                >
                  hello@henriquesilva.design
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>{c.details.linkedinLabel}</span>
                <a
                  href="https://www.linkedin.com/in/henrique-m-silva/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contactLink}
                >
                  {c.details.linkedinValue}
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>{c.details.locationLabel}</span>
                <span className={styles.contactValue}>
                  {c.details.locationValue}
                </span>
              </div>
            </div>
          </div>

          <form
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate
            aria-busy={formStatus === 'sending'}
          >
            <input
              type="hidden"
              name="subject"
              value={c.form.subjectHidden}
            />
            <input type="hidden" name="_language" value={c.form.formLanguage} />
            {(formStatus === 'sending' || formStatus === 'success') && (
              <div
                className={styles.formOverlay}
                role="status"
                aria-live="polite"
              >
                {formStatus === 'sending' ? (
                  <div className={styles.overlayContent}>
                    <span
                      className={styles.loadingIndicator}
                      aria-hidden="true"
                    />
                    <p className={styles.overlayTitle}>
                      {c.form.sendingTitle}
                    </p>
                  </div>
                ) : (
                  <div className={styles.overlayContent}>
                    <p className={styles.overlayTitle}>
                      {c.form.successTitle}
                    </p>

                    <p className={styles.overlayDescription}>
                      {c.form.successDescription}
                    </p>

                    <button
                      type="button"
                      className={styles.overlayAction}
                      onClick={resetFormStatus}
                    >
                      {c.form.successAction}
                    </button>
                  </div>
                )}
              </div>
            )}

            <div className={styles.honeypot} aria-hidden="true">
              <label htmlFor="website">{c.form.honeypotLabel}</label>
              <input
                id="website"
                name="_gotcha"
                type="text"
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>
                {c.form.nameLabel}
              </label>
              <input
                id="name"
                name="nome"
                type="text"
                autoComplete="name"
                required
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                className={`${styles.input}${
                  fieldErrors.name ? ` ${styles.inputError}` : ''
                }`}
              />
              {fieldErrors.name && (
                <span id="name-error" className={styles.fieldError}>
                  {fieldErrors.name}
                </span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                {c.form.emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                className={`${styles.input}${
                  fieldErrors.email ? ` ${styles.inputError}` : ''
                }`}
              />
              {fieldErrors.email && (
                <span id="email-error" className={styles.fieldError}>
                  {fieldErrors.email}
                </span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="company" className={styles.label}>
                {c.form.companyLabel} <span className={styles.optional}>{c.form.companyOptional}</span>
              </label>
              <input
                id="company"
                name="empresa"
                type="text"
                autoComplete="organization"
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="subject" className={styles.label}>
                {c.form.subjectLabel}
              </label>
              <input
                id="subject"
                name="assunto"
                type="text"
                required
                aria-invalid={Boolean(fieldErrors.subject)}
                aria-describedby={fieldErrors.subject ? 'subject-error' : undefined}
                className={`${styles.input}${
                  fieldErrors.subject ? ` ${styles.inputError}` : ''
                }`}
                placeholder={c.form.subjectPlaceholder}
              />
              {fieldErrors.subject && (
                <span id="subject-error" className={styles.fieldError}>
                  {fieldErrors.subject}
                </span>
              )}
            </div>

            <div className={`${styles.field} ${styles.messageField}`}>
              <label htmlFor="message" className={styles.label}>
                {c.form.messageLabel}
              </label>
              <textarea
                id="message"
                name="mensagem"
                rows="3"
                required
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                className={`${styles.textarea}${
                  fieldErrors.message ? ` ${styles.inputError}` : ''
                }`}
              />
              {fieldErrors.message && (
                <span id="message-error" className={styles.fieldError}>
                  {fieldErrors.message}
                </span>
              )}
            </div>

            {formStatus === 'error' && formMessage && (
              <p
                className={`${styles.formStatus} ${styles.formStatusError}`}
                role="alert"
                aria-live="assertive"
              >
                {formMessage}
              </p>
            )}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending'
                ? c.form.submitLabelSending
                : c.form.submitLabel}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}
