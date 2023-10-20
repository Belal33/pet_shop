import { Container, Spinner } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts";
import { ProfileForm } from "../components/profileform.js/ProfileForm";
import useFetchOperations from "../hooks/useFetchOperations";
import Footer from "../components/footer";
import { NavBar } from "../components/navbar";

const OperationsEl = (userData, response, loading, error) => {
    if (response) {
        return response.map((operation, i) => {
            return (
                <div
                    key={i}
                    className="product-item row mb-4 py-3  col-10   col-lg-8 justify-content-between align-items-center"
                    style={{ backgroundColor: "#f3f3f3" }}
                >
                    <div className="img me-3 col">
                        <img
                            style={{ width: "100px" }}
                            className="img-fluid"
                            alt=""
                            src={operation.product.imageurl}
                        />
                    </div>

                    <div className="text col">
                        <p style={{ color: "#3d4d6f" }} className="mb-1 fs-3">
                            {userData.user.is_staff && operation.user.username}
                        </p>
                        <p className="mb-1 text-main fs-4">
                            {operation.product.name}
                        </p>
                        <p style={{ color: "#3d4d6f" }} className="mb-1 fs-5">
                            ${operation.product.price}
                        </p>
                        <p className="mb-1">{operation.created_at}</p>
                    </div>
                    <div className="text mt-3 col-12">
                        <p className="">{operation.product.details}</p>
                    </div>
                </div>
            );
        });
    }
    if (loading) {
        return (
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "500px" }}
            >
                <Spinner
                    style={{ height: "120px", width: "120px" }}
                    className="text-main"
                    animation="border"
                />
            </div>
        );
    }
    if (error) {
        return (
            <div
                style={{ height: "500px" }}
                className=" flex-column d-flex justify-content-center align-items-center"
            >
                <h2 className="fs-1 text-center my-4">
                    <span> NO</span> Products
                </h2>
                <p className="fs-2 text-center text-danger">
                    Something went wrong. Please check your Network connection.
                </p>
            </div>
        );
    }
};

export default function ProfilePage() {
    const { userData } = useContext(UserContext);
    const { fetchOperations, response, loading, error } = useFetchOperations();
    useEffect(() => {
        if (userData.user.is_staff) {
            fetchOperations("tools/all-operations");
        } else {
            fetchOperations("tools/user-operation");
        }
    }, []);

    return (
        <>
            <NavBar />
            <Container>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-4 ">
                        <div className="card ">
                            <div className="card-body text-center">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle img-fluid"
                                    style={{ width: "150px" }}
                                />
                                <h5 className="mt-3 text-main">
                                    {userData.user.username || "user name"}
                                </h5>
                                {userData.user.is_staff && (
                                    <p className="text-success fs-5">
                                        {" "}
                                        |Admin User|{" "}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <ProfileForm userData={userData} />
                    </div>
                </div>
                <div className="text-center p-2 py-5 display-3">
                    {userData.user.is_staff ? (
                        <>
                            All <span>Operations</span>{" "}
                        </>
                    ) : (
                        <>
                            Your Last <span>Operations</span>{" "}
                        </>
                    )}
                </div>

                <div className="row justify-content-center align-items-center">
                    {/* the user Products  */}
                    {OperationsEl(userData, response, loading, error)}
                    {/* end product-item */}
                </div>
            </Container>
            <Footer />
        </>
    );
}
