import Layout from "Layout/Layout";
import CustomTab from "UI/CustomTab/CustomTab";
import { TabsProps } from "antd";
import BranchesTabpage from "components/BranchesTabPage/BranchesTabpage";
import PharmacyTab from "components/PharmacyTab/PharmacyTab";

export default function OrdersPrescriptions() {
    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Pharmacies (145)",
            children: <PharmacyTab />,
        },
        {
            key: "2",
            label: "Branches (436)",
            children: <BranchesTabpage />,
        },
    ];
    return (
        <Layout Headertext={"Clinics"}>
            <CustomTab items={items} />
        </Layout>
    );
}
