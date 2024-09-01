import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getters, actions } from '@store/TabStore';
import routes from '../../../router/routes';
const useNavigation = () => {
  const navigate = useNavigate();

  const handleNavigate = (movePath, viewId, replace = false) => {
    const components = getters.getTabComponent();
    if (components.some((el) => el.visible === true)) {
      const vc = components.filter((el) => el.visible === true)[0];
      console.log(movePath);
      console.log(routes.filter((e) => e.path.includes(`${movePath}`)));
      actions.updateViewComponent(vc.key, routes.filter((e) => e.path.includes(`${movePath}`))[0].path, {}, vc.visible, { id: viewId });
      //navigate(`/#/modal${movePath}`);
    } else {
      console.log('navigate--> ?? ');
      if (viewId) navigate(`${movePath}/${viewId}`, { replace: replace });
      else navigate(`${movePath}`, { replace: replace });
    }
  };

  const handleBack = (movePath, viewId, replace = false) => {
    const components = getters.getTabComponent();
    if (components.some((el) => el.visible === true)) {
      const vc = components.filter((el) => el.visible === true)[0];
      actions.updateViewComponent(vc.key, routes.filter((e) => e.path.includes(`${movePath}`))[0].path, {}, vc.visible, { id: viewId });
    } else {
      navigate(-1, { replace: replace });
    }
  };

  return { handleNavigate, handleBack };
};

export default useNavigation;
