import Header from "./Header";

const PageLayout = (props) => {

    const {children} = props;

    return (
        <>
            <div>
                <Header />
                {children}
            </div>
        </>
    );
};

export default PageLayout;