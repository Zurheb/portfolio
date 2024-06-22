import React, { useRef, useCallback } from "react";
import { Typography, Button, Input, Textarea } from "@material-tailwind/react";
import emailjs from "@emailjs/browser";
import AnimatedTitle from "../../Smth/Animation";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();

  const validationSchema = yup.object({
    name: yup.string().required(t("contact.name")),
    user_email: yup
      .string()
      .email(t("contact.email2"))
      .required(t("contact.email1")),
    message: yup.string().required(t("contact.mas")),
  });

  const resolver = useYupValidationResolver(validationSchema);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  const sendEmail = async (data) => {
    try {
      await emailjs.sendForm(
        "service_vxikxvp",
        "template_v0n5rjz",
        form.current,
        "WWSzqOiu_w7AOY72Z"
      );
      toast.success(t("success"));
    } catch (error) {
      console.error("FAILED...", error.text);
    }
  };

  return (
    <section id="contact" className="bg-[#F5F5F5] dark:bg-[#191919] p-10 lg:p-0">
      <div className="container mx-auto flex flex-col items-center" data-aos="fade-up">
        <Typography
          variant="h1"
          className="text-4xl lg:text-5xl font-bold text-[#42446E] mb-4"
        >
          <AnimatedTitle>
            <span className="text-[#42446E] dark:text-[#CCCCCC]">
              {t("contact.title")}
            </span>
          </AnimatedTitle>
        </Typography>
        <Typography
          variant="body1"
          className="text-lg lg:text-xl text-[#666666] dark:text-[#A7A7A7] mb-8 text-center"
        >
          {t("contact.p")}
        </Typography>
        <form
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
          className="w-full max-w-lg bg-white dark:bg-[#363636] p-8 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105"
          aria-label="Contact Form"
        >
          <div className="mb-4">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder={t("contact.input1")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] dark:bg-[#363636] border-[#666666] dark:border-[#A7A7A7]"
                  aria-label={t("contact.input1")}
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <Controller
              name="user_email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  placeholder={t("contact.input2")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] dark:bg-[#363636] border-[#666666] dark:border-[#A7A7A7]"
                  aria-label={t("contact.input2")}
                />
              )}
            />
            {errors.user_email && (
              <p className="text-red-500">{errors.user_email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder={t("contact.input3")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] dark:bg-[#363636] border-[#666666] dark:border-[#A7A7A7]"
                  aria-label={t("contact.input3")}
                />
              )}
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>
          <Button
            type="submit"
            color="blue"
            size="lg"
            className="w-full rounded-full px-8 py-3 text-white bg-[#4CAF50] dark:text-[#4CAF50] dark:bg-[#2C2C2C] transition-transform transform hover:scale-105 hover:bg-[#388E3C]"
            aria-label={t("contact.button")}
          >
            {t("contact.button")}
          </Button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
