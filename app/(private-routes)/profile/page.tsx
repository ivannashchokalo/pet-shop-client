import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ProfilePageClient from "./ProfilePageClient";
import { fetchUserRequestsServer } from "@/lib/api/server/requestsServer";

export default async function ProfilePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["user-requests"],
    queryFn: fetchUserRequestsServer,
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProfilePageClient />
      </HydrationBoundary>
    </div>
  );
}
