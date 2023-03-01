import SocialNetworkContainer from './SocialNetworkContainer';
import InformationContainer from './InformationContainer';

import Avatar from '../img/3x4.jpg';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Vitor Formigoni" />
            <p className="title">Full Stack Developer</p>
            <SocialNetworkContainer />
            <InformationContainer />
            <a href="#" className="btn">
                Download currículo
            </a>
        </aside>
    );
};

export default Sidebar;
