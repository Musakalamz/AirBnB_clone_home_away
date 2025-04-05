import { Button } from "@/components/ui/button";

async function createProfileAction(formData: FormData) {
  "use server";
  const firstName = formData.get("firstName") as string;
  console.log(firstName);
}

export default function CreateProfile() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md max-w-lg">
        <form action={createProfileAction}>
          <Button type="submit" size="lg">
            Create Profile
          </Button>
        </form>
      </div>
    </section>
  );
}
