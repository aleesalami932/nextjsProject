import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <p>The Detail Page</p>;
}

export default DetailPage;
