import {
  Alert,
  Checkbox,
  Drawer,
  Dropdown,
  DropdownItem,
  Switch,
  Tooltip,
} from "@/components/ui";
import * as React from "react";
import AuthSide from "./AuthSide";
import SignInForm from "./SignInForm";

interface IAuthLayoutProps {}

const AuthLayout: React.FunctionComponent<IAuthLayoutProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const [enabled, setEnabled] = React.useState(false);

  return (
    <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
      <AuthSide>
        <div className="mb-8">
          <h3 className="mb-1">Welcome back!</h3>
          <p>Please enter your credentials to sign in!</p>
        </div>
        {/* Drawer{" "}
        <div>
          <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
            Open Drawer
          </button>
          <Drawer
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            footer={<h1>sex</h1>}
            title="SEX"
            placement="right"
          ></Drawer>
        </div> */}
        {/* <div>
          <Dropdown
            displayButton={
              <button className="btn btn-alternative btn-sm">Options</button>
            }
          >
            <DropdownItem
              onClick={() => null}
              className=" bg-red-500 text-white"
            >
              Account settings
            </DropdownItem>
            <DropdownItem>Support</DropdownItem>
            <DropdownItem>License</DropdownItem>
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
        </div> */}
        {/* <div>
          <Tooltip message={"Hello World!"}>
            <button className="btn btn-primary">Hover me Please!</button>
          </Tooltip>
          <Tooltip message={"Whatssup you!"}>
            <button className="ml-3 btn btn-warning">
              Dont hover me, i'm scared!
            </button>
          </Tooltip>
        </div> */}

        <div>
          <h6 className="mb-6 text-center">DEFAULT INPUT</h6>
          <div className="form-group">
            <label htmlFor="floating_email">Email address</label>

            <input
              type="text"
              name="floating_email"
              id="floating_email"
              placeholder=" "
              required
            />

            <p>Please fill this input</p>
          </div>

          <div className="form-group form-group-success">
            <label htmlFor="floating_email">Email address</label>

            <input
              type="text"
              name="floating_email"
              id="floating_email"
              placeholder=" "
              required
            />

            <p>Alright! Username available!</p>
          </div>

          <div className="form-group form-group-error">
            <label htmlFor="floating_email">Email address</label>

            <input
              type="text"
              name="floating_email"
              id="floating_email"
              placeholder=" "
              required
            />

            <p>Oops! Username already taken!</p>
          </div>

          <h6 className="mb-6 text-center">SIZES</h6>
          <hr className="mb-3" />

          <div className="form-group">
            <label htmlFor="floating_email">SM</label>

            <input
              type="text"
              name="floating_email"
              id="floating_email"
              placeholder=" "
              required
              className="form-control-sm"
            />
          </div>

          <div className="form-group">
            <label htmlFor="floating_email">Base</label>

            <input
              type="text"
              name="floating_email"
              id="floating_email"
              placeholder=" "
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="floating_email">Large</label>

            <input
              type="text"
              name="floating_email"
              id="floating_email"
              placeholder=" "
              required
              className="form-control-lg"
            />
          </div>
        </div>

        <h6 className="mb-6 text-center">DISABLED</h6>
        <div className="form-group">
          <label htmlFor="floating_email">Email address</label>

          <input
            type="text"
            name="floating_email"
            id="floating_email"
            placeholder=" "
            required
            disabled
          />
        </div>

        <div className="form-group">
          <textarea
            id="message"
            rows={4}
            placeholder="Leave a comment..."
          ></textarea>
        </div>

        <div className="form-group">
          <select>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>

        <div className="form-group">
          <select className="form-control-lg">
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>

        <div className="form-group">
          <select className="form-control-sm">
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>

        <div className="form-group">
          <Checkbox isChecked={isChecked} onChange={setIsChecked}>
            I agree to the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and condition
            </a>
            .
          </Checkbox>
        </div>

        <div className="form-group">
          <Switch isChecked={enabled} onChange={setEnabled} />
        </div>
        <SignInForm />
      </AuthSide>
    </div>
  );
};

export default AuthLayout;
