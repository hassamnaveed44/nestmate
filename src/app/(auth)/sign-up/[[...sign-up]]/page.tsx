import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignUp
      appearance={{
        variables: {
          colorPrimary: "#171714",
          colorBackground: "#F5F1E8",
          colorDanger: "#B76E52",
          borderRadius: "14px",
        },
        elements: {
          rootBox: "w-full",
          cardBox: "w-full shadow-none",
          card: "bg-soft-sand/35 border border-sand-border rounded-2xl shadow-sm p-6 md:p-8 w-full backdrop-blur-sm",
          header: "hidden",
          headerTitle: "hidden",
          headerSubtitle: "hidden",

          socialButtonsBlockButton:
            "!bg-warm-ivory border border-sand-border text-charcoal hover:!bg-soft-sand/60 shadow-none h-11 transition-all active:scale-[0.99]",
          socialButtonsBlockButtonText:
            "!text-charcoal font-medium text-sm",
          socialButtonsProviderIcon: "w-4 h-4 mr-2",

          dividerRow: "my-5",
          dividerLine: "!bg-sand-border",
          dividerText: "!text-charcoal/50 text-xs font-medium uppercase tracking-wider",

          formFieldLabel:
            "!text-charcoal/80 text-sm font-medium mb-1.5",
          formFieldInput:
            "!bg-warm-ivory border border-sand-border !text-charcoal rounded-xl h-11 px-3.5 focus:!border-charcoal focus:ring-2 focus:ring-charcoal/10 transition-all placeholder:text-charcoal/40 text-sm",
          formFieldInputShowPasswordButton:
            "!text-charcoal/60 hover:!text-charcoal transition-colors",

          formButtonPrimary:
            "!bg-charcoal !text-warm-ivory hover:opacity-90 active:scale-[0.99] rounded-xl h-11 text-sm font-medium shadow-none transition-all mt-2",

          footer: "!bg-transparent border-t-0 p-0 pt-5",
          footerAction: "!bg-transparent !text-charcoal/70 flex justify-center items-center gap-1.5",
          footerActionText: "!text-charcoal/70 text-sm",
          footerActionLink: "!text-charcoal font-semibold hover:underline text-sm",
          
          /* Hides Clerk branding & development mode badges */
          footerPagesLink: "hidden",
          footerPages: "hidden",
          badge: "hidden",

          formFieldErrorText:
            "!text-terracotta text-xs mt-1.5 font-medium",
          identityPreviewText:
            "!text-charcoal font-medium text-sm",
          identityPreviewEditButton:
            "!text-charcoal/70 hover:!text-charcoal transition-colors",
          otpCodeFieldInput:
            "!bg-warm-ivory border border-sand-border !text-charcoal rounded-xl focus:!border-charcoal focus:ring-2 focus:ring-charcoal/10",
        },
      }}
      routing="path"
      path="/sign-up"
      signInUrl="/sign-in"
      fallbackRedirectUrl="/"
    />
  );
}