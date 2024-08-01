import React from 'react'
import { init, send } from 'emailjs-com'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Contact.css'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  const componentName = 'Contact'

  const [name, setName] = useState('') // 「ご氏名」の部分
  const [company, setCompany] = useState('') // 「会社名」の部分
  const [mail, setMail] = useState('') // 「メールアドレス」の部分
  const [title, setTitle] = useState('') // 「件名」の部分
  const [message, setMessage] = useState('') // 「お問い合わせ内容」の部分

  const sendMail = () => {
    const userID = process.env.REACT_APP_EMAILJS_USER_ID
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    if (userID !== undefined && serviceID !== undefined && templateID !== undefined) {
      init(userID)

      const template_param = {
        user_name: name,
        company: company,
        user_email: mail,
        title: title,
        message: message,
      }

      send(serviceID, templateID, template_param).then(() => {
        window.alert('お問い合わせを送信しました。')

        setName('')
        setCompany('')
        setMail('')
        setMessage('')
        setTitle('')
      })
    }
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    sendMail()
  }

  const handleCanceled = () => {
    setName('')
    setCompany('')
    setMail('')
    setMessage('')
    setTitle('')
  }

  const disableSend = name === '' || mail === '' || title === '' || message === ''

  return (
    <div className="content_wrapper_contact">
      <div className="contact_img">
        <Helmet>
          <title>Principal Dawn | {componentName}</title>
        </Helmet>
        <div className="contact_bg">
          <div className="page_title">
            Contact
            <p className="title_description">ご連絡はこちら</p>
          </div>
          <div className="contents">
            <p className="text">
              お仕事や各種お問い合わせは、以下のフォームよりお願いいたします。
              <br />
              SNSからのご連絡も受け付けております。
              <Link className="link" to="/links">
                Linksのページ
              </Link>
              もご覧ください。
            </p>
            <form>
              <div className="form_row">
                <div className="text gray">
                  <label htmlFor="nameForm">{decodeURI('ご氏名\u3000\u3000\u3000\u3000：')}</label>
                </div>
                <input
                  type="text"
                  id="nameForm"
                  className="formInput"
                  name="user_name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form_row">
                <div className="text gray">
                  <label htmlFor="companyNameForm">会社名（任意）：</label>
                </div>
                <input
                  type="text"
                  id="companyNameForm"
                  className="formInput"
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="form_row">
                <div className="text gray">
                  <label htmlFor="mailForm">メールアドレス：</label>
                </div>
                <input
                  type="email"
                  id="mailForm"
                  className="formInput"
                  name="user_email"
                  value={mail}
                  required
                  onChange={(e) => setMail(e.target.value)}
                />
              </div>
              <div className="form_row">
                <div className="text gray">
                  <label htmlFor="mailTitleForm">{decodeURI('件名\u3000\u3000\u3000\u3000\u3000：')}</label>
                </div>
                <input
                  type="text"
                  id="mailTitleForm"
                  className="formInput"
                  name="title"
                  value={title}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form_row">
                <div className="text gray">
                  <label htmlFor="mailContentForm">問い合わせ内容：</label>
                </div>
                <textarea
                  id="mailContentForm"
                  className="formInput"
                  name="message"
                  value={message}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="btns">
                <div>
                  <button className="submit_button" onClick={handleClick} disabled={disableSend}>
                    お問い合わせを送信する
                  </button>
                </div>
                <div>
                  <button className="cancel_button" onClick={handleCanceled}>
                    全て消去
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
