import { AuthGuard } from "../feature/auth/component/AuthGuard/AuthGuard";

export const Home = () => {
  return(
    <AuthGuard>
      <div>ホーム</div>
    </AuthGuard>
  );
}

export default Home;
