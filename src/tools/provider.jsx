import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

const ProviderConfig = ({ children }) => {
    return (
        <BrowserRouter>
            <ConfigProvider>
                {children}
            </ConfigProvider>
        </BrowserRouter>
    );
};

ProviderConfig.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProviderConfig;
