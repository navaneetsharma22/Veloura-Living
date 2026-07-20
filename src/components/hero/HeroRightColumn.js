import { CollectionSlider } from "./CollectionSlider";

/**
 * Veloura Living - Hero Right Column
 * Houses the vertical Collection Slider.
 */
export function HeroRightColumn() {
  return (
    <div className="flex flex-col justify-end lg:justify-center h-full w-full pb-16 lg:pb-0 lg:pl-8 xl:pl-16 relative">
      <CollectionSlider />
    </div>
  );
}
