import { fetchUserRequests } from "@/lib/requestsClient";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ProfilePageClient from "./ProfilePageClient";

export default async function ProfilePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["user-requests"],
    queryFn: fetchUserRequests,
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProfilePageClient />
      </HydrationBoundary>
    </div>
  );
}
