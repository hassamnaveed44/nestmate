import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <SignIn
      appearance={{
        variables: {
          colorPrimary: "#171714",
          colorBackground: "#F5F1E8",
          colorDanger: "#B76E52",
          borderRadius: "16px",
        },
        elements: {
          rootBox: "w-full",
          cardBox: "w-full shadow-none",
          card: "bg-soft-sand/35 border border-sand-border rounded-2xl shadow-sm p-6 md:p-8 w-full backdrop-blur-sm",
          headerTitle: "hidden",
          headerSubtitle: "hidden",

          socialButtonsBlockButton:
            "!bg-warm-ivory border border-sand-border text-charcoal hover:!bg-soft-sand/60 shadow-none h-11 transition-colors",
          socialButtonsBlockButtonText:
            "!text-charcoal font-medium text-sm",

          dividerLine: "!bg-sand-border",
          dividerText: "!text-charcoal/50 text-xs",

          formFieldLabel:
            "!text-charcoal/80 text-sm font-medium",
          formFieldInput:
            "!bg-warm-ivory border border-sand-border !text-charcoal rounded-xl h-11 focus:!border-charcoal focus:ring-1 focus:ring-charcoal/15 transition-all",

          formButtonPrimary:
            "!bg-charcoal !text-warm-ivory hover:opacity-90 rounded-xl h-11 text-sm font-medium shadow-none transition-opacity",

          footer: "!bg-transparent border-t-0 p-0 pt-4",
          footerAction: "!bg-transparent !text-charcoal/70",
          footerActionText: "!text-charcoal/70 text-sm",
          footerActionLink: "!text-charcoal font-semibold hover:underline",

          formFieldErrorText:
            "!text-terracotta text-xs mt-1",
          identityPreviewText:
            "!text-charcoal font-medium",
          identityPreviewEditButton:
            "!text-charcoal hover:opacity-75",
        },
      }}
      routing="path"
      path="/sign-in"
      signUpUrl="/sign-up"
      fallbackRedirectUrl="/"
    />
  );
}