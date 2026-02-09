# Norm and Inner Product

<details>
<summary><strong>What is the domain and codomain of a norm mapping on a vector space $V$?</strong></summary>

It is a function that maps from $V$ to the set of real numbers $\mathbb{R}$.

</details>

<details>
<summary><strong>The property $\|\lambda x\| = |\lambda| \|x\|$ in the definition of a norm is known as _____.</strong></summary>

Homogeneity

</details>

<details>
<summary><strong>State the Triangle Inequality axiom for a norm $\| \cdot \|$.</strong></summary>

$\|x + y\| \le \|x\| + \|y\|$ for all $x, y \in V$.

</details>

<details>
<summary><strong>According to the norm axioms, what is the necessary and sufficient condition for $\|x\| = 0$?</strong></summary>

$x = 0$

</details>

<details>
<summary><strong>What is the lower bound for the value of any norm $\|x\|$?</strong></summary>

It must be greater than or equal to zero ($\|x\| \ge 0$).

</details>

<details>
<summary><strong>How is the $L_1$ norm of a vector $x \in \mathbb{R}^n$ calculated?</strong></summary>

It is the sum of the absolute values of its components, $\sum_{i=1}^n |x_i|$.

</details>

<details>
<summary><strong>What is the common name for the $L_1$ norm?</strong></summary>

The Manhattan Norm.

</details>

<details>
<summary><strong>What is the mathematical definition of the $L_2$ norm for a vector $x \in \mathbb{R}^n$?</strong></summary>

$\sqrt{\sum_{i=1}^n x_i^2}$ or $\sqrt{x^\top x}$.

</details>

<details>
<summary><strong>How is the $L_\infty$ norm of a vector $x$ defined?</strong></summary>

It is the maximum absolute value among all components of the vector, $\max_i |x_i|$.

</details>

<details>
<summary><strong>In a 2D coordinate system, what geometric shape is formed by the set of points where $\|x\|_1 = 1$?</strong></summary>

A diamond (or a rotated square).

</details>

<details>
<summary><strong>In a 2D coordinate system, what geometric shape is formed by the set of points where $\|x\|_2 = 1$?</strong></summary>

A circle.

</details>

<details>
<summary><strong>In a 2D coordinate system, what geometric shape is formed by the set of points where $\|x\|_\infty = 1$?</strong></summary>

A square.

</details>

<details>
<summary><strong>How is the dot product of two vectors $x, y \in \mathbb{R}^n$ calculated?</strong></summary>

$x^\top y = \sum_{i=1}^n x_i y_i$.

</details>

<details>
<summary><strong>Term: Bilinear Mapping</strong></summary>

A mapping $f: V \times V \to \mathbb{R}$ that is linear in both its first and second arguments.

</details>

<details>
<summary><strong>What formula represents the linearity of a mapping $f$ in its first argument?</strong></summary>

$f(\lambda x + \psi y, z) = \lambda f(x, z) + \psi f(y, z)$.

</details>

<details>
<summary><strong>What formula represents the linearity of a mapping $f$ in its second argument?</strong></summary>

$f(x, \lambda y + \psi z) = \lambda f(x, y) + \psi f(x, z)$.

</details>

<details>
<summary><strong>When is a bilinear mapping $f$ considered symmetric?</strong></summary>

If $f(x, y) = f(y, x)$ for all $x, y \in V$.

</details>

<details>
<summary><strong>What two conditions must a bilinear mapping satisfy to be considered positive definite?</strong></summary>

$f(x, x) > 0$ for all non-zero $x$, and $f(0, 0) = 0$.

</details>

<details>
<summary><strong>Concept: Inner Product</strong></summary>

A symmetric, positive definite bilinear mapping $f: V \times V \to \mathbb{R}$.

</details>

<details>
<summary><strong>In machine learning, symmetric positive definite bilinear mappings are essential for defining _____ in Support Vector Machines.</strong></summary>

Kernels

</details>

<details>
<summary><strong>Given an ordered basis $(b_1, \dots, b_n)$, how are the elements of the matrix representation $A$ of an inner product defined?</strong></summary>

$A_{ij} := \langle b_i, b_j \rangle$.

</details>

<details>
<summary><strong>How is an inner product $\langle x, y \rangle$ expressed using coordinate vectors $\hat{x}, \hat{y}$ and a representation matrix $A$?</strong></summary>

$\langle x, y \rangle = \hat{x}^\top A \hat{y}$.

</details>

<details>
<summary><strong>If an inner product is symmetric, what property must its representation matrix $A$ possess?</strong></summary>

The matrix $A$ must be symmetric ($A = A^\top$).

</details>

<details>
<summary><strong>What is the defining property of a symmetric positive definite matrix $A$ regarding the quadratic form $x^\top A x$?</strong></summary>

$x^\top A x > 0$ for all $x \ne 0$.

</details>

<details>
<summary><strong>What is the term for a symmetric matrix $A$ where $x^\top A x \ge 0$ for all $x$?</strong></summary>

Symmetric positive semidefinite.

</details>

<details>
<summary><strong>If $A$ is not necessarily symmetric or positive definite, what can be said about the matrix $\hat{A} = A A^\top$?</strong></summary>

$\hat{A}$ must be positive semidefinite.

</details>

<details>
<summary><strong>What is the null space of any symmetric positive definite matrix $A$?</strong></summary>

The zero vector set, $\{0\}$.

</details>

<details>
<summary><strong>Why is a symmetric positive definite matrix $A$ always invertible?</strong></summary>

Because $Ax \ne 0$ for all $x \ne 0$, implying it has full rank and a null space of $\{0\}$.

</details>

<details>
<summary><strong>What can be concluded about the diagonal elements $a_{ii}$ of a symmetric positive definite matrix $A$?</strong></summary>

They are all strictly positive ($a_{ii} > 0$).

</details>

<details>
<summary><strong>How is the norm of a vector $x$ induced by an inner product $\langle \cdot \rangle$?</strong></summary>

$\|x\| = \sqrt{\langle x, x \rangle}$.

</details>

<details>
<summary><strong>State the Cauchy-Schwarz inequality for an inner product space.</strong></summary>

$|\langle x, y \rangle| \le \|x\| \|y\|$.

</details>

<details>
<summary><strong>How is the distance $d(x, y)$ between two vectors defined in an inner product space?</strong></summary>

$d(x, y) := \|x - y\| = \sqrt{\langle x - y, x - y \rangle}$.

</details>

<details>
<summary><strong>What is the mathematical term for a mapping $d$ that defines distance between elements in a vector space?</strong></summary>

A metric.

</details>

<details>
<summary><strong>The metric property $d(x, y) = 0$ if and only if $x = y$ is part of which axiom?</strong></summary>

Positive definiteness.

</details>

<details>
<summary><strong>State the triangle inequality for a metric $d(x, z)$.</strong></summary>

$d(x, z) \le d(x, y) + d(y, z)$.

</details>

<details>
<summary><strong>State the Law of Cosines for vectors $u$ and $v$.</strong></summary>

$\|u - v\|^2 = \|u\|^2 + \|v\|^2 - 2\|u\| \|v\| \cos \theta$.

</details>

<details>
<summary><strong>How can the inner product $\langle u, v \rangle$ be expressed in terms of norms and the angle $\theta$ between the vectors?</strong></summary>

$\langle u, v \rangle = \|u\| \cdot \|v\| \cos \theta$.

</details>

<details>
<summary><strong>What is the formula to find the cosine of the angle $\theta$ between two non-zero vectors $x$ and $y$?</strong></summary>

$\cos \theta = \frac{\langle x, y \rangle}{\|x\| \|y\|}$.

</details>

<details>
<summary><strong>Under what condition are two vectors $x$ and $y$ defined as orthogonal?</strong></summary>

They are orthogonal if and only if their inner product is zero ($\langle x, y \rangle = 0$).

</details>

<details>
<summary><strong>What is the unique range of the angle $\theta$ between two vectors as defined in linear algebra?</strong></summary>

$\theta \in [0, \pi]$.

</details>

<details>
<summary><strong>In the exercise provided, why is the matrix $A_2 = \begin{pmatrix} 9 &amp; 6 \\ 6 &amp; 3 \end{pmatrix}$ not positive definite?</strong></summary>

Its determinant is negative ($27 - 36 = -9$), failing the positive definiteness test.

</details>

<details>
<summary><strong>Given $\langle x, y \rangle = x_1 y_1 - (x_1 y_2 + x_2 y_1) + 2x_2 y_2$, what is the representation matrix $A$ relative to the standard basis?</strong></summary>

$A = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$.

</details>

<details>
<summary><strong>How is the distance metric $d(x, y)$ related to the symmetry of vectors?</strong></summary>

It must satisfy $d(x, y) = d(y, x)$ for all $x, y$.

</details>

<details>
<summary><strong>What does the Cauchy-Schwarz inequality guarantee about the ratio $\frac{\langle x, y \rangle}{\|x\| \|y\|}$?</strong></summary>

The value of the ratio always lies within the interval $[-1, 1]$.

</details>

<details>
<summary><strong>Why does $\|x\| &gt; 0$ for all $x \ne 0$ in a symmetric positive definite matrix context?</strong></summary>

Because the induced norm $\|x\| = \sqrt{x^\top Ax}$ and $x^\top Ax$ is strictly positive for $x \ne 0$.

</details>

<details>
<summary><strong>In the inner product calculation $\langle x, y \rangle = \hat{x}^\top A \hat{y}$, what do $\hat{x}$ and $\hat{y}$ represent?</strong></summary>

The coordinate vectors of $x$ and $y$ with respect to a specific ordered basis $B$.

</details>

<details>
<summary><strong>In the context of the dot product, what is the length of the vector $x = [1, 1]^\top$?</strong></summary>

$\sqrt{2}$.

</details>

<details>
<summary><strong>What is the inner product of the basis vectors $b_i$ and $b_j$ in the standard basis $\{e_1, \dots, e_n\}$ using the dot product?</strong></summary>

$1$ if $i = j$, and $0$ otherwise.

</details>

<details>
<summary><strong>If $A$ is a positive definite matrix, how do we know $Ax = 0$ implies $x = 0$?</strong></summary>

If $x \ne 0$, then $x^\top Ax > 0$, which contradicts $x^\top(Ax) = x^\top(0) = 0$.

</details>

<details>
<summary><strong>A bilinear mapping $f(x, y)$ is linear in its second argument. Expand $f(x, 2y - 3z)$.</strong></summary>

$2f(x, y) - 3f(x, z)$.

</details>

