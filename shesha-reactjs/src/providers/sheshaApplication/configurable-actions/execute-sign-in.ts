import { useAuth, useSheshaApplication } from '@/providers';
import { useConfigurableAction } from '@/providers/configurableActionsDispatcher';
import { SheshaActionOwners } from '../../configurableActionsDispatcher/models';

export interface IExcuteSignInArguments {}

export const useExecuteSignIn = () => {
  const { backendUrl, httpHeaders } = useSheshaApplication();

  const { loginUserAsync } = useAuth();

  useConfigurableAction<IExcuteSignInArguments>(
    {
      name: 'Sign In',
      owner: 'Common',
      ownerUid: SheshaActionOwners.Common,
      hasArguments: false,
      executer: (_, actionContext) => loginUserAsync(actionContext?.form?.data),
    },
    [backendUrl, httpHeaders]
  );
};
