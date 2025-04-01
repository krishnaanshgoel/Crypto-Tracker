import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./style.css";
import { useState } from 'react';

export default function PriceType({pricetype,handlePriceTypeChange}) {


  return (
    <div className="toggle-prices">
    <ToggleButtonGroup
      value={pricetype}
      exclusive
      onChange={handlePriceTypeChange}
      sx={{
        "&.Mui-selected": {
          color: "var(--blue) !important",
        },
        borderColor: "var(--blue)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid var(--blue)!important",
          borderColor: "unset",
          color: "var(--blue) !important ",
        },
        "& .MuiToggleButton-standard": {
          color: "var(--blue) !important",
        },
      }}
    >
      <ToggleButton value="prices" className="toggle-button" >
        Price
      </ToggleButton>
      <ToggleButton value="market_caps" className="toggle-button">
        Market Cap
      </ToggleButton>
      <ToggleButton value="total_volumes" className="toggle-button">
        Total Volume
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}
