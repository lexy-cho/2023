// import { loading } from 'utils/api/api';

interface Loading {
    isLoading?: boolean;
}

const Loading: React.FC<Loading> = ({ isLoading }) => {
    return (
        <>
            {isLoading &&
                <div className="pageLoading">
                    <div>
                        <span className="spinner"></span>
                    </div>
                </div>
            }
        </>
    );
}

export default Loading;