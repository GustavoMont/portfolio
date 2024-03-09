import React, { useState } from "react";
import InputText from "src/components/Form/InputText";
import TextAreaInput from "src/components/Form/TextAreaInput";
import Button from "src/styles/Button";
import Layout from "src/styles/common/Layout";
import Spin from "src/components/common/Spin";
import { BodyText, ButtonText, H3 } from "src/styles/Typograph";
import Linkedin from "src/components/SocialMedia/Linkedin";
import Gmail from "src/components/SocialMedia/Gmail";
import SectionObserver from "src/components/common/SectionObserver";
import { IconButton } from "src/components/common/IconButton";
import { ContactSection } from "src/styles/sections/ContactSection.style";

export default function Contact() {
  const INITIAL_FORMDATA = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(INITIAL_FORMDATA);
  const [isLoading, setIsLoading] = useState(false);
  const [feedBack, setFeedBack] = useState({
    message: "Sue mensagem foi enviada!! Já te respondo!!!!",
    isError: false,
    visible: false,
  });
  function resetForm() {
    setFormData(INITIAL_FORMDATA);
  }

  function changeValue(
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setIsLoading(true);
      await fetch(e.currentTarget.action, {
        method: e.currentTarget.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: formData.subject,
        }),
      }).then((res) => res.status);
      resetForm();
      setFeedBack({
        ...feedBack,
        visible: true,
      });
    } catch (error) {
      setFeedBack({
        isError: true,
        message: "Putz ocorreu um erro ao enviar a mensagem",
        visible: true,
      });
    }
    setIsLoading(false);
  }

  return (
    <Layout id="contatos">
      <ContactSection className="items-center">
        <div className="contact-container">
          <div data-aos="fade-right">
            <SectionObserver href="#contatos">
              <H3>Vamos bater um papo</H3>
            </SectionObserver>
          </div>
          <form
            action="https://formsubmit.co/lgmluisgm@gmail.com"
            method="POST"
            data-aos="fade-up"
            onSubmit={onSubmit}
          >
            {feedBack.visible && (
              <div>
                <BodyText>{feedBack.message}</BodyText>
              </div>
            )}

            <InputText
              required
              label="Nome: "
              name="name"
              value={formData.name}
              onChange={changeValue}
            />
            <InputText
              required
              label="E-mail: "
              name="email"
              value={formData.email}
              onChange={changeValue}
              type="email"
            />

            <InputText
              required
              label="Assunto: "
              name="subject"
              value={formData.subject}
              onChange={changeValue}
              type="text"
            />
            <TextAreaInput
              required
              label="Mensagem: "
              name="message"
              onChange={changeValue}
              value={formData.message}
            />
            <Button
              border="fill"
              color="primary"
              rounded="default"
              disabled={isLoading}
            >
              <div className="flex gap-4 items-center justify-center">
                {isLoading && <Spin />}
                <ButtonText>Enviar mensagem</ButtonText>
              </div>
            </Button>
          </form>
          <div className="contacts">
            <IconButton aria-label="ir para linkedin">
              <Linkedin />
            </IconButton>
            <IconButton aria-label="entrar em contato por e-mail">
              <Gmail />
            </IconButton>
          </div>
        </div>
      </ContactSection>
    </Layout>
  );
}
