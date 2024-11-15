import React, { useState } from 'react';
import { Grid, List, ListItem, Checkbox, Button, Paper } from '@mui/material';

const TransferList: React.FC = () => {
  const [left, setLeft] = useState<number[]>([1, 2, 3, 4]); // Left list items
  const [right, setRight] = useState<number[]>([5, 6, 7, 8]); // Right list items
  const [checked, setChecked] = useState<number[]>([]); // Selected items

  // Handle toggle of checkbox
  const handleToggle = (value: number) => {
    setChecked((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Move all items to the right
  const moveAllRight = () => {
    setRight((prev) => [...prev, ...left]);
    setLeft([]);
  };

  // Move selected items to the right
  const moveCheckedRight = () => {
    const selected = checked.filter((item) => left.includes(item));
    setRight((prev) => [...prev, ...selected]);
    setLeft((prev) => prev.filter((item) => !selected.includes(item)));
    setChecked((prev) => prev.filter((item) => !selected.includes(item)));
  };

  // Move selected items to the left
  const moveCheckedLeft = () => {
    const selected = checked.filter((item) => right.includes(item));
    setLeft((prev) => [...prev, ...selected]);
    setRight((prev) => prev.filter((item) => !selected.includes(item)));
    setChecked((prev) => prev.filter((item) => !selected.includes(item)));
  };


  const moveAllLeft = () => {
    setLeft((prev) => [...prev, ...right]);
    setRight([]);
  };


  const generateList = (items: number[]) => (
    <Paper style={{ width: 200, height: 230, overflow: 'auto' }}>
      <List>
        {items.map((item) => (
          <ListItem key={item} style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
              checked={checked.includes(item)}
              onChange={() => handleToggle(item)}
            />
            {`Item ${item}`}
          </ListItem>
        ))}
      </List>
    </Paper>
  );

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{generateList(left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button onClick={moveAllRight} disabled={left.length === 0}>
            ≫
          </Button>
          <Button onClick={moveCheckedRight} disabled={checked.filter((x) => left.includes(x)).length === 0}>
            &gt;
          </Button>
          <Button onClick={moveCheckedLeft} disabled={checked.filter((x) => right.includes(x)).length === 0}>
            &lt;
          </Button>
          <Button onClick={moveAllLeft} disabled={right.length === 0}>
            ≪
          </Button>
        </Grid>
      </Grid>
      <Grid item>{generateList(right)}</Grid>
    </Grid>
  );
};

export default TransferList;
