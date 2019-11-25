/* Copyright (C) 2019 Monomax Software Pty Ltd
 *
 * This file is part of Dnote.
 *
 * Dnote is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Dnote is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Dnote.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react';
import Button from '../../Common/Button';

interface Props {
  kind: string;
  size?: string;
  isHot: boolean;
  onClick: () => void;
  className?: string;
}

const CopyButton: React.FunctionComponent<Props> = ({
  kind,
  size,
  isHot,
  onClick,
  className
}) => {
  return (
    <Button
      type="button"
      size={size}
      kind={kind}
      onClick={onClick}
      disabled={isHot}
      className={className}
    >
      {isHot ? 'Copied' : 'Copy link'}
    </Button>
  );
};

export default CopyButton;
