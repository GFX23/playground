import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
} from "@material-tailwind/react";
 
export function Docs() {
  return (
    <Popover>
      <PopoverHandler>
        <Button color="blue" >More Info!</Button>
      </PopoverHandler>
      <PopoverContent className="z-[999] flex w-1/2 p-0">
        <div className="p-4">
          <Typography color="blue-gray" className="mb-2 font-medium" variant="lead">
            Adding Dots // Removing Dots
          </Typography>
          <Typography variant="paragraph" color="gray" className="mb-4 font-normal">
            Click anywhere on surface bellow to put element there. Click on that circle again to make it disappear.
          </Typography>
          <Typography variant="paragraph" color="gray" className="mb-4 font-normal">
            This should demonstrate working with "event".
            "OnClick", coordinate of event is stored, then all coordinates are rendered with allowance according to center of created element.
          </Typography>
          <Typography variant="paragraph" color="gray" className="mb-4 font-normal">
            Note that all coordinates are stored in Local Storage to maintain your elements even after refresh.
          </Typography>
          <Typography variant="paragraph" color="gray" className="mb-4 font-normal">
            NEXT IMPROVEMENTS: ADD CHECKBOX FOR DIFFERENT ELEMENTS // ADD COLOR CHANGER // DRAG & DROP
            </Typography>
        </div>
      </PopoverContent>
    </Popover>
  );
}