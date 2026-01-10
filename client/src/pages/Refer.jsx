import Layout from "../components/Layout";
import ReferralForm from "../components/ReferralForm";

const Refer = () => {
  return (
    <Layout title="Refer a Candidate">
      <div className="flex justify-center">
        <div className="w-full max-w-xl">
          <ReferralForm />
        </div>
      </div>
    </Layout>
  );
};

export default Refer;
