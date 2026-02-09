# Linear Algebra

<details>
<summary><strong>In the context of square matrices, what is the defining property of an inverse matrix $B$ for a matrix $A \in \mathbb{R}^{n \times n}$?</strong></summary>

$AB = I_n = BA$, where $I_n$ is the identity matrix.

</details>

<details>
<summary><strong>What term describes a square matrix that does not possess an inverse?</strong></summary>

Singular or noninvertible.

</details>

<details>
<summary><strong>How is the inverse of a matrix product $(AB)^{-1}$ calculated in terms of the individual inverses?</strong></summary>

$(AB)^{-1} = B^{-1}A^{-1}$.

</details>

<details>
<summary><strong>Given the inverse of a matrix $A$, what is the relationship between $(A^{-1})^{\top}$ and $(A^{\top})^{-1}$?</strong></summary>

They are equal, denoted as $A^{-\top}$.

</details>

<details>
<summary><strong>True or False: For any two invertible matrices $A$ and $B$, $(A+B)^{-1} = A^{-1} + B^{-1}$.</strong></summary>

False.

</details>

<details>
<summary><strong>If a square matrix $A$ is symmetric, what property is guaranteed for its inverse $A^{-1}$?</strong></summary>

$A^{-1}$ is also symmetric.

</details>

<details>
<summary><strong>In the case of a non-square matrix $A$ with linearly independent columns, what formula yields the unique least-squares solution to $Ax=b$?</strong></summary>

$x = (A^{\top}A)^{-1}A^{\top}b$.

</details>

<details>
<summary><strong>What is the name of the operator $A^{+} = (A^{\top}A)^{-1}A^{\top}$ used in solving overdetermined systems?</strong></summary>

The Moore-Penrose pseudo-inverse.

</details>

<details>
<summary><strong>What are the four essential axioms a set $G$ and an operation $\otimes$ must satisfy to be considered a Group?</strong></summary>

Closure, Associativity, Neutral Element, and Inverse Element.

</details>

<details>
<summary><strong>What additional property distinguishes an Abelian group from a standard group?</strong></summary>

Commutativity (e.g., $x \otimes y = y \otimes x$).

</details>

<details>
<summary><strong>Why is the set of natural numbers $(\mathbb{N}_0, +)$ not considered a group despite having a neutral element (0)?</strong></summary>

It lacks inverse elements for all members.

</details>

<details>
<summary><strong>Why is the set of integers under multiplication $(\mathbb{Z}, \cdot)$ not a group?</strong></summary>

Inverses are missing for most elements (e.g., the inverse of 2 is $0.5 \notin \mathbb{Z}$).

</details>

<details>
<summary><strong>In linear algebra, what is the &#x27;General Linear Group&#x27; $GL(n, \mathbb{R})$?</strong></summary>

The set of regular (invertible) $n \times n$ matrices under multiplication.

</details>

<details>
<summary><strong>A real-valued Vector Space $V$ consists of a set $V$ equipped with which two operations?</strong></summary>

Addition (inner operation) and Scalar Multiplication (outer operation).

</details>

<details>
<summary><strong>According to the vector space axioms, what kind of group must $(V, +)$ be?</strong></summary>

An Abelian group.

</details>

<details>
<summary><strong>What are the two distributive laws that must hold in a vector space?</strong></summary>

$\lambda \cdot (x + y) = \lambda \cdot x + \lambda \cdot y$ and $(\lambda + \psi) \cdot x = \lambda \cdot x + \psi \cdot x$.

</details>

<details>
<summary><strong>The set of complex numbers $\mathbb{C}$ is isomorphic to which real vector space?</strong></summary>

$\mathbb{R}^2$.

</details>

<details>
<summary><strong>What is the formal definition of a vector subspace $U \subseteq V$?</strong></summary>

A subset that is itself a vector space under the restricted operations of $V$ (closed under addition and scalar multiplication).

</details>

<details>
<summary><strong>Definition: Linear Independence</strong></summary>

A set of vectors $x_1, \dots, x_k$ where the equation $\sum_{i=1}^{k} \lambda_i x_i = 0$ has only the trivial solution $\lambda_1 = \dots = \lambda_k = 0$.

</details>

<details>
<summary><strong>What defines a &#x27;Basis&#x27; of a vector space $V$?</strong></summary>

A linearly independent generating set of $V$.

</details>

<details>
<summary><strong>How is the dimension of a finite-dimensional vector space $V$ defined?</strong></summary>

The number of vectors in its basis.

</details>

<details>
<summary><strong>What is the &#x27;Rank&#x27; of a matrix $A \in \mathbb{R}^{m \times n}$?</strong></summary>

The number of linearly independent columns in the matrix.

</details>

<details>
<summary><strong>In data science, what does the rank of a data matrix $A$ signify?</strong></summary>

The number of independent directions (intrinsic dimensionality) in the data.

</details>

<details>
<summary><strong>What condition must a mapping $\Phi: V \to W$ satisfy to be considered &#x27;linear&#x27; (a homomorphism)?</strong></summary>

$\Phi(\lambda x + \psi y) = \lambda \Phi(x) + \psi \Phi(y)$ for all vectors $x, y$ and scalars $\lambda, \psi$.

</details>

<details>
<summary><strong>Define an &#x27;Injective&#x27; mapping.</strong></summary>

A mapping where $\Phi(x) = \Phi(y)$ implies $x = y$ (one-to-one).

</details>

<details>
<summary><strong>What is an &#x27;Isomorphism&#x27; in the context of linear mappings?</strong></summary>

A linear mapping that is both injective and surjective (bijective).

</details>

<details>
<summary><strong>What is an &#x27;Endomorphism&#x27;?</strong></summary>

A linear mapping from a vector space to itself ($\Phi: V \to V$).

</details>

<details>
<summary><strong>How is the transformation matrix $A_{\Phi}$ of a linear mapping $\Phi: V \to W$ constructed relative to bases $B$ and $C$?</strong></summary>

The columns of $A_{\Phi}$ are the coordinate vectors of $\Phi(b_j)$ represented in basis $C$.

</details>

<details>
<summary><strong>What is the formal definition of &#x27;Similar&#x27; matrices $A, \tilde{A} \in \mathbb{R}^{n \times n}$?</strong></summary>

There exists a regular matrix $S$ such that $\tilde{A} = S^{-1}AS$.

</details>

<details>
<summary><strong>Distinguish between &#x27;Equivalence&#x27; and &#x27;Similarity&#x27; for matrices.</strong></summary>

Similarity requires $V=W$ and using the same basis change $S$, whereas Equivalence allows different bases $S$ and $T$ for domain and codomain.

</details>

<details>
<summary><strong>What is the &#x27;Kernel&#x27; (or Null Space) of a linear mapping $\Phi$?</strong></summary>

The set of all vectors in the domain that map to the zero vector in the codomain.

</details>

<details>
<summary><strong>What is the &#x27;Image&#x27; (or Range) of a linear mapping $\Phi$?</strong></summary>

The set of all vectors in the codomain that can be expressed as $\Phi(v)$ for some $v$ in the domain.

</details>

<details>
<summary><strong>How is the rank of a matrix $A$ related to the image of its corresponding linear mapping $\Phi$?</strong></summary>

$rk(A) = dim(Im(\Phi))$.

</details>

<details>
<summary><strong>What is an &#x27;Affine Mapping&#x27; $\phi(x)$?</strong></summary>

A composition of a linear mapping $\Phi(x)$ and a translation vector $a$, written as $\phi(x) = a + \Phi(x)$.

</details>

<details>
<summary><strong>What property is preserved by an orthogonal matrix $A$ during a transformation?</strong></summary>

It preserves lengths of vectors and angles between them (distances and dot products).

</details>

<details>
<summary><strong>What is the defining characteristic of an orthogonal matrix $A$ regarding its inverse?</strong></summary>

$A^{-1} = A^{\top}$.

</details>

<details>
<summary><strong>A square matrix $A$ is invertible if and only if its determinant $det(A)$ satisfies what condition?</strong></summary>

$det(A) \ne 0$.

</details>

<details>
<summary><strong>What is the &#x27;Trace&#x27; of a square matrix $A$?</strong></summary>

The sum of the diagonal elements of the matrix.

</details>

<details>
<summary><strong>What is the cyclic permutation property of the trace for three matrices $A, K, L$?</strong></summary>

$tr(AKL) = tr(KLA) = tr(LAK)$.

</details>

<details>
<summary><strong>The Cholesky decomposition $A = LL^{\top}$ is defined for which class of matrices?</strong></summary>

Symmetric, positive definite matrices.

</details>

<details>
<summary><strong>What are the components of the Singular Value Decomposition (SVD) of a matrix $A$?</strong></summary>

$A = U \Sigma V^{\top}$, where $U$ and $V$ are orthogonal and $\Sigma$ is a diagonal matrix of singular values.

</details>

<details>
<summary><strong>In SVD, what do the columns of $U$ and $V$ represent?</strong></summary>

$U$ contains the left-singular vectors and $V$ contains the right-singular vectors.

</details>

<details>
<summary><strong>How are the nonzero singular values $\sigma_i$ of $A$ related to the eigenvalues of $A^{\top}A$?</strong></summary>

The singular values are the square roots of the nonzero eigenvalues of $A^{\top}A$.

</details>

<details>
<summary><strong>What makes the SVD more flexible than the eigendecomposition?</strong></summary>

SVD exists for all matrices (including non-square), whereas eigendecomposition requires a square, non-defective matrix.

</details>

<details>
<summary><strong>According to the Eckart-Young theorem, how is the best rank-$k$ approximation of a matrix $A$ obtained?</strong></summary>

By truncating the SVD to the top $k$ singular values (truncated SVD).

</details>

<details>
<summary><strong>What is the primary objective of Principal Component Analysis (PCA)?</strong></summary>

To find a lower-dimensional representation that maximizes the variance of the projected data.

</details>

<details>
<summary><strong>In PCA, the principal components correspond to which specific vectors of the data covariance matrix $S$?</strong></summary>

The eigenvectors associated with the largest eigenvalues.

</details>

<details>
<summary><strong>How is the variance lost during PCA data compression calculated?</strong></summary>

It is the sum of the eigenvalues associated with the discarded principal components.

</details>

<details>
<summary><strong>What is the relationship between PCA and the reconstruction error?</strong></summary>

PCA finds the subspace that minimizes the average squared reconstruction error.

</details>

<details>
<summary><strong>In the context of SVMs, what is a &#x27;Separating Hyperplane&#x27;?</strong></summary>

An affine subspace that partitions the feature space into two halves corresponding to different classes.

</details>

<details>
<summary><strong>What is the &#x27;Kernel Trick&#x27; in machine learning?</strong></summary>

Computing inner products in a high-dimensional feature space implicitly using a kernel function $k(x_i, x_j)$.

</details>

<details>
<summary><strong>Define &#x27;Linear Combination&#x27; in a vector space $V$.</strong></summary>

A vector $v = \sum_{i=1}^{k} \lambda_i x_i$, where $x_i \in V$ and $\lambda_i$ are real scalars.

</details>

<details>
<summary><strong>A set of vectors is &#x27;linearly dependent&#x27; if what condition regarding the zero vector is met?</strong></summary>

There exists a non-trivial linear combination (not all scalars zero) that equals the zero vector.

</details>

<details>
<summary><strong>What is the &#x27;Span&#x27; of a set of vectors $A$?</strong></summary>

The set of all possible linear combinations of the vectors in $A$.

</details>

<details>
<summary><strong>If $U$ is a subspace of $V$, what is the relationship between their dimensions?</strong></summary>

$dim(U) \le dim(V)$, with equality only if $U = V$.

</details>

<details>
<summary><strong>In the SVD transformation sequence, what operation does the matrix $V^{\top}$ perform first?</strong></summary>

A change of basis in the domain $\mathbb{R}^n$.

</details>

<details>
<summary><strong>What is an &#x27;Automorphism&#x27;?</strong></summary>

A bijective linear mapping from a space to itself.

</details>

<details>
<summary><strong>In a coordinate system, what are the &#x27;coordinates&#x27; of a vector $x$ relative to an ordered basis $B = (b_1, \dots, b_n)$?</strong></summary>

The unique scalars $\alpha_1, \dots, \alpha_n$ such that $x = \sum \alpha_i b_i$.

</details>

<details>
<summary><strong>Under what condition is a linear mapping $\Phi$ injective?</strong></summary>

If and only if its kernel consists solely of the zero vector ($ker(\Phi) = \{0_V\}$).

</details>

<details>
<summary><strong>Formula: Determinant of the product of two square matrices $A$ and $B$.</strong></summary>

$det(AB) = det(A)det(B)$.

</details>

<details>
<summary><strong>What does the &#x27;rank-nullity theorem&#x27; imply about the dimensions of the kernel and image of $\Phi: V \to W$?</strong></summary>

$dim(V) = dim(ker(\Phi)) + dim(Im(\Phi))$.

</details>

<details>
<summary><strong>How does the Cholesky decomposition facilitate efficient determinant calculation?</strong></summary>

$det(A) = det(L)^2$, which is the square of the product of the diagonal entries of the triangular matrix $L$.

</details>

<details>
<summary><strong>Why is array-based &#x27;element-wise&#x27; multiplication rarely used in standard linear algebra compared to matrix multiplication?</strong></summary>

It does not follow standard matrix multiplication rules and has mismatched dimensions when vectors are treated as $n \times 1$ matrices.

</details>

<details>
<summary><strong>What is the &#x27;Spectral Theorem&#x27; regarding symmetric matrices?</strong></summary>

It states that symmetric matrices can be diagonalized by an orthonormal basis of eigenvectors.

</details>

<details>
<summary><strong>What is the &#x27;null space&#x27; of a matrix $A$ in terms of linear equations?</strong></summary>

The set of all solutions to the homogeneous system $Ax = 0$.

</details>

