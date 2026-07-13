import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Contact.css';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [mail, setMail] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const sendMail = async () => {
        const userID = import.meta.env.VITE_EMAILJS_USER_ID;
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        if (!userID || !serviceID || !templateID) {
            console.error('EmailJSの環境変数が設定されていません');
            window.alert('送信設定に問題があります。管理者にお問い合わせください。');
            return;
        }
        const template_param = {
            user_name: name,
            company: company,
            user_email: mail,
            title: title,
            message: message,
        };
        try {
            setSending(true);
            await emailjs.send(serviceID, templateID, template_param, {
                publicKey: userID,
            });
            window.alert('お問い合わせを送信しました。');
            handleCanceled();
        }
        catch (error) {
            console.error('EmailJS送信エラー:', error);
            window.alert('送信に失敗しました。時間をおいて再度お試しください。');
        }
        finally {
            setSending(false);
        }
    };
    const handleClick = (e) => {
        e.preventDefault();
        sendMail();
    };
    const handleCanceled = () => {
        setName('');
        setCompany('');
        setMail('');
        setMessage('');
        setTitle('');
    };
    const disableSend = name === '' || mail === '' || title === '' || message === '' || sending;
    return (_jsx("div", { className: "content_wrapper_contact", children: _jsxs("div", { className: "contact_img", children: [_jsx(Helmet, { children: _jsx("title", { children: "Principal Dawn | Contact" }) }), _jsxs("div", { className: "contact_bg", children: [_jsxs("div", { className: "page_title", children: ["Contact", _jsx("p", { className: "title_description", children: "\u3054\u9023\u7D61\u306F\u3053\u3061\u3089" })] }), _jsxs("div", { className: "contents", children: [_jsxs("p", { className: "text", children: ["\u304A\u4ED5\u4E8B\u3084\u5404\u7A2E\u304A\u554F\u3044\u5408\u308F\u305B\u306F\u3001\u4EE5\u4E0B\u306E\u30D5\u30A9\u30FC\u30E0\u3088\u308A\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002", _jsx("br", {}), "SNS\u304B\u3089\u306E\u3054\u9023\u7D61\u3082\u53D7\u3051\u4ED8\u3051\u3066\u304A\u308A\u307E\u3059\u3002", _jsx(Link, { className: "link", to: "/links", children: "Links\u306E\u30DA\u30FC\u30B8" }), "\u3082\u3054\u89A7\u304F\u3060\u3055\u3044\u3002"] }), _jsxs("form", { children: [_jsxs("div", { className: "form_row", children: [_jsx("div", { className: "text gray", children: _jsx("label", { htmlFor: "nameForm", children: decodeURI('ご氏名\u3000\u3000\u3000\u3000：') }) }), _jsx("input", { type: "text", id: "nameForm", className: "formInput", name: "user_name", value: name, required: true, onChange: (e) => setName(e.target.value) })] }), _jsxs("div", { className: "form_row", children: [_jsx("div", { className: "text gray", children: _jsx("label", { htmlFor: "companyNameForm", children: "\u4F1A\u793E\u540D\uFF08\u4EFB\u610F\uFF09\uFF1A" }) }), _jsx("input", { type: "text", id: "companyNameForm", className: "formInput", name: "company", value: company, onChange: (e) => setCompany(e.target.value) })] }), _jsxs("div", { className: "form_row", children: [_jsx("div", { className: "text gray", children: _jsx("label", { htmlFor: "mailForm", children: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\uFF1A" }) }), _jsx("input", { type: "email", id: "mailForm", className: "formInput", name: "user_email", value: mail, required: true, onChange: (e) => setMail(e.target.value) })] }), _jsxs("div", { className: "form_row", children: [_jsx("div", { className: "text gray", children: _jsx("label", { htmlFor: "mailTitleForm", children: decodeURI('件名\u3000\u3000\u3000\u3000\u3000：') }) }), _jsx("input", { type: "text", id: "mailTitleForm", className: "formInput", name: "title", value: title, required: true, onChange: (e) => setTitle(e.target.value) })] }), _jsxs("div", { className: "form_row", children: [_jsx("div", { className: "text gray", children: _jsx("label", { htmlFor: "mailContentForm", children: "\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9\uFF1A" }) }), _jsx("textarea", { id: "mailContentForm", className: "formInput", name: "message", value: message, required: true, onChange: (e) => setMessage(e.target.value) })] }), _jsxs("div", { className: "btns", children: [_jsx("div", { children: _jsx("button", { className: "submit_button", onClick: handleClick, disabled: disableSend, children: sending ? '送信中...' : 'お問い合わせを送信する' }) }), _jsx("div", { children: _jsx("button", { className: "cancel_button", onClick: handleCanceled, children: "\u5168\u3066\u6D88\u53BB" }) })] })] })] })] })] }) }));
};
export default Contact;
