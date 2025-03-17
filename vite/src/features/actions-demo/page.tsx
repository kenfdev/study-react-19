import { UpdateNameFormTransition } from './update-name-form-transition';
import { UpdateNameFormLegacy } from './update-name-form-legacy';
import { UpdateNameForm } from './update-name-form';

export function ActionsDemoPage() {
  return (
    <div>
      <UpdateNameFormLegacy />
      <UpdateNameFormTransition />
      <UpdateNameForm />
    </div>
  );
}
