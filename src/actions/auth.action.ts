"use server";

export type LoginState = {
  error?: string;
  success?: boolean;
};

export async function loginAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "All fields are required" };
  }

  // Simulate DB delay
  await new Promise((res) => setTimeout(res, 1500));

  if (email !== "admin@test.com" || password !== "123456") {
    return { error: "Invalid credentials" };
  }

  return { success: true };
}