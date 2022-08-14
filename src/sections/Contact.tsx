import React, { ChangeEvent, useState } from "react";
import InputText from "src/components/Form/InputText";
import TextAreaInput from "src/components/Form/TextAreaInput";
import GridContainer from "src/styles/common/GridContainer";
import Layout from "src/styles/common/Layout";
import { H5 } from "src/styles/Typograph";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function changeValue(
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  return (
    <Layout id="contatos" isNotScreenHeight>
      <GridContainer className="md:h-screen items-center">
        <div className="col-start-1 col-end-4 md:col-start-3 md:col-end-11 flex flex-col items-center gap-6">
          <H5 className="text-primary md:text-heading-4 md:tracking-heading-4">
            Vamos bater um papo
          </H5>
          <div className="w-full md:w-8/12">
            <form className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-4 md:flex-row">
                <InputText
                  label="Nome: "
                  name="name"
                  value={formData.name}
                  onChange={changeValue}
                />
                <InputText
                  label="E-mail: "
                  name="email"
                  value={formData.email}
                  onChange={changeValue}
                  type="email"
                />
              </div>
              <InputText
                label="Assunto: "
                name="subject"
                value={formData.subject}
                onChange={changeValue}
                type="text"
              />
              <TextAreaInput
                label="Mensagem: "
                name="message"
                onChange={changeValue}
                value={formData.message}
              />
            </form>
          </div>
        </div>
      </GridContainer>
    </Layout>
  );
}
