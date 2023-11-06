import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Puff } from "react-loader-spinner";

const Loader = () => {    
    const { loader } = useContext(AuthContext);

    return (
        <>
        {
            loader ?
                <div className="min-h-[calc(100vh-442px)] w-full grid justify-center items-center">
                    <Puff
                        height="80"
                        width="80"
                        radius={1}
                        color="#4fa94d"
                        ariaLabel="puff-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div> : ''
        }
        </>
    );
};

export default Loader;