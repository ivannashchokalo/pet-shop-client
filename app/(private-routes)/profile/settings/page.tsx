import { ChangeNameForm } from "@/components/ChangeNameForm/ChangeNameForm";
import { ChangePasswordForm } from "@/components/ChangePasswordForm/ChangePasswordForm";

export default function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      <ChangeNameForm />
      <ChangePasswordForm />
    </div>
  );
}
