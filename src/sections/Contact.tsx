import React, { ChangeEvent, useState } from "react";
import InputText from "src/components/Form/InputText";
import TextAreaInput from "src/components/Form/TextAreaInput";
import Button from "src/styles/Button";
import GridContainer from "src/styles/common/GridContainer";
import Layout from "src/styles/common/Layout";
import { ButtonText, H5 } from "src/styles/Typograph";

export default function Contact() {
  const INITIAL_FORMDATA = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(INITIAL_FORMDATA);

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
      alert("Opaaa!Já retorno sua mensagem :)");
    } catch (error) {
      alert("Putz! Ocorreu um erro ao enviar sua mensagem");
    }
  }

  return (
    <Layout id="contatos" isNotScreenHeight>
      <GridContainer className="md:h-screen items-center">
        <div className="col-start-1 col-end-4 md:col-start-3 md:col-end-11 flex flex-col items-center gap-6">
          <div data-aos="fade-right">
            <H5 className="text-primary md:text-heading-4 md:tracking-heading-4">
              Vamos bater um papo
            </H5>
          </div>
          <div className="w-full md:w-full md:max-w-lg">
            <form
              action="https://formsubmit.co/lgmluisgm@gmail.com"
              method="POST"
              className="flex flex-col gap-y-4 w-full"
              data-aos="fade-up"
              onSubmit={onSubmit}
            >
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
              <Button border="fill" color="primary" rounded="default">
                <ButtonText>Enviar mensagem</ButtonText>
              </Button>
            </form>
          </div>
        </div>
      </GridContainer>
    </Layout>
  );
}
