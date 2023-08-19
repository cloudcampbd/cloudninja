import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Modal from "@cloudscape-design/components/modal";
import TopNavigation from "@cloudscape-design/components/top-navigation";

export default function Header(props) {
  const user = undefined;
  const [visible, setVisible] = useState(false);
  let navigate = useNavigate();

  const handleUserProfileAction = (event) => {};

  return (
    <div id="top-nav">
      <TopNavigation
          identity={{
            title: "CloudNinja",
            href: "/",
            onFollow: function(e) {
              e.preventDefault();
              navigate('/');
            },
            logo: { 
              src: "https://d1.awsstatic.com/products/AWS-mobile/Mobile-v2/amplify-logo-circle.3c79537237d8ac81726fc61fe5e0c03f288e64ae.png",
              alt: 'Amplify CloudNinja'
            }
          }}
          utilities={[
            {
              type: "menu-dropdown",
              text: (user !== undefined) ? user.username : "Profile",
              iconName: "user-profile",
              onItemClick: handleUserProfileAction,
              items: [
                  { id: "signout", text: (user !== undefined) ? "Sign out" : "Sign in" }
              ]
            }
          ]}
          i18nStrings={{
              overflowMenuTriggerText: "More",
              overflowMenuTitleText: "All",
              overflowMenuBackIconAriaLabel: "Back",
              overflowMenuDismissIconAriaLabel: "Close menu"
          }}
      />
      <Modal
        onDismiss={() => setVisible(false)}      
        visible={visible}      
        closeAriaLabel="Close modal"
        header="Please sign in or create an account"
        modalRoot={document.getElementById('top-nav')}
      >
      </Modal>
    </div>
  );
}
