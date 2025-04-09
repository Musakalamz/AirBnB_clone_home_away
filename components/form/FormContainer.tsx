"use client";

// import { useFormState } from "react-dom";
import { useActionState, useEffect } from "react";
import { actionFunction } from "@/utils/types";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: "",
};

type FormContainerProps = {
  action: actionFunction;
  children: React.ReactNode;
};

export default function FormContainer({
  action,
  children,
}: FormContainerProps) {
  const [state, formAction] = useActionState(action, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}
