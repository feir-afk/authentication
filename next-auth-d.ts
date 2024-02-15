import { $Enums, UserRole } from "@prisma/client";
import { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
	role: UserRole;
	isTwoFactorEnabled: boolean;
};

declare module "next-auth" {
	interface Session {
		user: ExtendedUser;
	}
}

declare module "next-auth" {
	interface User {
		role: $Enums.UserRole;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		role: $Enums.UserRole;
	}
}
