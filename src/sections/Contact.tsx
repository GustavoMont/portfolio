import React, { useRef, useState } from "react";
import InputText from "src/components/Form/InputText";
import TextAreaInput from "src/components/Form/TextAreaInput";
import Button from "src/styles/Button";
import Layout from "src/styles/common/Layout";
import Spin from "src/components/common/Spin";
import { BodyText, ButtonText, H5 } from "src/styles/Typograph";
import Linkedin from "src/components/SocialMedia/Linkedin";
import Gmail from "src/components/SocialMedia/Gmail";
import PressableItem from "src/styles/common/PressableItem";
import SectionObserver from "src/components/common/SectionObserver";
import GridContainer from "src/styles/common/GridContainer";

export default function Contact() {
  const INITIAL_FORMDATA = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const ref = useRef(null);
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
      <GridContainer className="items-center">
        <div className="col-start-1 col-end-4 md:col-start-3 md:col-end-11 flex flex-col items-center gap-6">
          <div data-aos="fade-right">
            <SectionObserver href="#contatos">
              <H5 className="text-primary md:text-heading-4 md:tracking-heading-4">
                Vamos bater um papo
              </H5>
            </SectionObserver>
          </div>
          <div className="w-full md:max-w-lg" ref={ref}>
            <form
              action="https://formsubmit.co/lgmluisgm@gmail.com"
              method="POST"
              className="flex flex-col gap-4 w-full"
              data-aos="fade-up"
              onSubmit={onSubmit}
            >
              {feedBack.visible && (
                <div
                  className={`${
                    feedBack.isError ? "text-dark-secondary" : "text-green-500"
                  }`}
                >
                  <BodyText className="text-center">
                    {feedBack.message}
                  </BodyText>
                </div>
              )}
              <div className="flex flex-col gap-4 md:flex-row">
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
              </div>
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
          </div>
          <div className="flex gap-6">
            <PressableItem>
              <Linkedin />
            </PressableItem>
            <PressableItem>
              <Gmail />
            </PressableItem>
          </div>
        </div>
      </GridContainer>
    </Layout>
  );
}
