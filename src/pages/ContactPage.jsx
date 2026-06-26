import { useState } from 'react'
import Layout from '../components/Layout'
import styles from './ContactPage.module.css'

export default function ContactPage() {
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
      nextErrors.name = 'Digite seu nome.'
    }

    if (!email) {
      nextErrors.email = 'Digite seu e-mail.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Digite um e-mail válido.'
    }

    if (!subject) {
      nextErrors.subject = 'Digite o assunto.'
    }

    if (!message) {
      nextErrors.message = 'Escreva uma mensagem.'
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
      setFormMessage(
        'Mensagem enviada. Obrigado pelo contato — responderei assim que possível.',
      )
    } catch {
      setFormStatus('error')
      setFormMessage(
        'Não foi possível enviar sua mensagem agora. Tente novamente ou escreva para hello@henriquesilva.design.',
      )
    }
  }

  return (
    <Layout>
      <section className={styles.page} aria-labelledby="contact-title">
        <div className={styles.container}>
          <div className={styles.intro}>
            <div className={styles.introText}>
              <h1 id="contact-title" className={styles.title}>
                Vamos conversar?
              </h1>

              <p className={styles.description}>
                Se você tem uma oportunidade, projeto ou parceria em mente,
                me conte um pouco sobre o contexto.
              </p>
            </div>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>E-mail</span>
                <a
                  href="mailto:hello@henriquesilva.design"
                  className={styles.contactLink}
                >
                  hello@henriquesilva.design
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/henrique-m-silva"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contactLink}
                >
                  Ver perfil no LinkedIn →
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Localização</span>
                <span className={styles.contactValue}>
                  São Paulo, Brasil
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
              value="Novo contato pelo portfólio — {{ nome }}"
            />
            <input type="hidden" name="_language" value="pt-BR" />
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
                      Enviando mensagem…
                    </p>
                  </div>
                ) : (
                  <div className={styles.overlayContent}>
                    <p className={styles.overlayTitle}>
                      Mensagem enviada.
                    </p>

                    <p className={styles.overlayDescription}>
                      Obrigado pelo contato. Responderei assim que possível.
                    </p>

                    <button
                      type="button"
                      className={styles.overlayAction}
                      onClick={resetFormStatus}
                    >
                      Enviar outra mensagem →
                    </button>
                  </div>
                )}
              </div>
            )}

            <div className={styles.honeypot} aria-hidden="true">
              <label htmlFor="website">Não preencha este campo</label>
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
                Nome
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
                E-mail
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
                Empresa <span className={styles.optional}>— opcional</span>
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
                Assunto
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
                placeholder="Oportunidade, projeto, parceria..."
              />
              {fieldErrors.subject && (
                <span id="subject-error" className={styles.fieldError}>
                  {fieldErrors.subject}
                </span>
              )}
            </div>

            <div className={`${styles.field} ${styles.messageField}`}>
              <label htmlFor="message" className={styles.label}>
                Mensagem
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
                ? 'Enviando…'
                : 'Enviar mensagem →'}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}
