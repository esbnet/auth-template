import { auth, signOut } from "@/src/auth";
import { Button } from "@/src/components/ui/button";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sair</Button>
      </form>
    </div>
  );
};

export default SettingsPage;
