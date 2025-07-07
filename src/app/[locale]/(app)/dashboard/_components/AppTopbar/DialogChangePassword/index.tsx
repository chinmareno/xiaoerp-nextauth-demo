import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, type Dispatch } from "react";
import { CurrrentPasswordForm } from "./CurrentPasswordForm";
import { NewPasswordForm } from "./NewPasswordForm";

type Props = {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const DialogChangePassword = ({ setIsOpen }: Props) => {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <Dialog open={true}>
      <DialogContent
        onXIconClick={() => setIsOpen(false)}
        className="sm:max-w-[425px]"
      >
        {isVerified ? (
          <NewPasswordForm handleClose={() => setIsOpen(false)} />
        ) : (
          <CurrrentPasswordForm
            handleClose={() => setIsOpen(false)}
            setIsVerified={setIsVerified}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
