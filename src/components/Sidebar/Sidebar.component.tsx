import React from "react";

import { Form, User } from "../index";
import styles from "./Sidebar.module.css";

import { signOut, useSession } from "next-auth/react";
const Sidebar = () => {
    const handleLogout = () => {
        signOut();
    };

    const { data } = useSession();

    return (
        <div className={styles.root}>
            <div className={styles.top}>
                <User
                    logout={() => handleLogout()}
                    email={data?.user?.email || ""}
                    name={data?.user?.name || ""}
                    image={data?.user?.image || ""}
                    loading={!data}
                />
            </div>
            <div className={styles.center}>
                <Form />
            </div>
        </div>
    );
};

export default Sidebar;
